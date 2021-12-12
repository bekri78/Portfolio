import { useEffect, useState, useRef } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "./Map.css";
import {formatDistanceStrict } from "date-fns";
import { fr } from "date-fns/locale";
 

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import PredictionsOnInputChange from "../Autocomplete/InputSearch";
 
let username = "58249dcd-3769-4a99-9d86-53902427531e";

function Map() {
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [lngAdresse, setLngAdresse] = useState(null);
  const [latAdresse, setLatAdresse] = useState(null);
 
  const [kilometre, setKilometre] = useState();
  const [duree, setDuree] = useState();
  const [zoom, setZoom] = useState(12);
  const [nativia, setNativia] = useState();
   
  const latMoi = 48.938777923583984; 
  const lgnMoi = 2.3733909130096436;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const converSecond = (value) => {
    const duration = (s) =>
      formatDistanceStrict(0, s * 1000, { includeSeconds: true, locale: fr });
    return setDuree(duration(value));
  };
  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  const drawRoute = (geoJson, map) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geoJson,
      },
      paint: {
        "line-color": "#4a90e2",
        "line-width": 6,
      },
    });
  };

  const addAdresseMarker = (map) => {
    const element = document.createElement("div");
    element.className = "marker-adress";
    const adressMarker = new tt.Marker({
      draggable: true,
      element: element,
    })
      .setLngLat([lngAdresse, latAdresse])
      .addTo(map);

    adressMarker.on("dragend", () => {
      const lngLat = adressMarker.getLngLat();
      setLngAdresse(lngLat.lng);
      setLatAdresse(lngLat.lat);
    });
  };

  const Nativia = () => {
    let gareProche = `https://${username}@api.navitia.io/v1/coverage/fr-idf/journeys?from=${lgnMoi}%3B${latMoi}&to=${lngAdresse}%3B${latAdresse}&count=2&`;
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(gareProche)}`
    )
      .then((response) => response.json())
      .then((result) => {
        let recupInoNativia = JSON.parse(result.contents);
        let tempsNativia = recupInoNativia.journeys[0].duration;
        setNativia(
          formatDistanceStrict(0, tempsNativia * 1000, {
            includeSeconds: true,
            locale: fr,
          })
        );
      })
      .catch(function (error) {
        console.log("itineraire erreur ", error);
      });
  };

  useEffect(() => {
    if (kilometre > 0) {
      setZoom(10);
    }
  }, [kilometre]);

  useEffect(() => {
    const origin = {
      lng: lgnMoi,
      lat: latMoi,
    };
    const destinations = [
      {
        lng: lngAdresse,
        lat: latAdresse,
      },
    ];

    let map = tt.map({
      key: "hs6vjIEHT9Di39fQwri0RAECIKUVEpXw",
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [lgnMoi, latMoi],
      zoom: zoom,
    });

    
    setMap(map);
     

    const addMarker = () => {
      const popupOffset = {
        bottom: [0, -55],
      };
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(
        "Je suis ici !"
      );
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: false,
        element: element,
      })
        .setLngLat([lgnMoi, latMoi])
        .addTo(map);
      marker.setPopup(popup).togglePopup();
    };
    addMarker();

    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination);
      });

      const callParameters = {
        key: "hs6vjIEHT9Di39fQwri0RAECIKUVEpXw",
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      };

      return new Promise((resolve, reject) => {
        ttapi.services
          .matrixRouting(callParameters)
          .then((matrixAPIResults) => {
            const results = matrixAPIResults.matrix[0];

           
            setKilometre(
              matrixAPIResults.matrix[0][0]["response"]["routeSummary"]
                .lengthInMeters / 1000
            );
            if (
              matrixAPIResults.matrix[0][0]["response"]["routeSummary"]
                .travelTimeInSeconds !== 0
            ) {
              converSecond(
                matrixAPIResults.matrix[0][0]["response"]["routeSummary"]
                  .travelTimeInSeconds
              );
            }

            const resultsArray = results.map((result, index) => {
              return {
                location: locations[index],
                drivingtime: result.response.routeSummary.travelTimeInSeconds,
              };
            });
            resultsArray.sort((a, b) => {
              return a.drivingtime - b.drivingtime;
            });
            const sortedLocations = resultsArray.map((result) => {
              return result.location;
            });

            resolve(sortedLocations);
          });
      });
    };
    // ajoute origin au tableau destination ( unshift) pour faire appelle a ttapi.services.calculateRoute
    // location = [origin, destination ]
    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin);

        ttapi.services
          .calculateRoute({
            key: "hs6vjIEHT9Di39fQwri0RAECIKUVEpXw",
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson();
            drawRoute(geoJson, map);
          });
      });
    };

    if (
      lngAdresse !== null &&
      latAdresse !== null 
    ) {
      recalculateRoutes();
      addAdresseMarker(map);
      Nativia();
    }
    return () => map.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ lngAdresse, latAdresse]);
  return (
     <div className="map_conteneur">
      <PredictionsOnInputChange
        newLng={(lng) => setLngAdresse(lng)}
        newLat={(lat) => setLatAdresse(lat)}
        lngUser={(lng) => setLngAdresse(lng)}
        latUser={(lat) => setLatAdresse(lat)}
       
        
      />
        
         
      {duree && (
        <div style = {{ display:'flex ', alignItems:'center', justifyContent:'space-around', width:'100%'}}>
          <p>Distance : {kilometre}km </p>
          <p>En voiture : {duree} </p>
          <p>En transport : {nativia ? nativia : 'Indisponible'} </p>
        </div>
      )}
      {map && (
        <div style={{ height: "100%", width: "100%" }}>
          <div
            style={{ height: "100%", width: "100%" }}
            ref={mapElement}
            className="map"
          ></div>
        </div>
      )}
       
    </div>
  );
}

export default Map;
