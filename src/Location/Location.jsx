import React, { useEffect, useState } from "react";
import Modale from "../ModalerrorLocation/Modale" 

export default function Location(props) {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(location, errorLocation);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const location = (position) => {
    props.locationLatUser(position.coords.latitude)
    props.locationLngUser(position.coords.longitude)
 
  };

  const errorLocation = (error) => {
    props.locationLatUser(null)
    props.locationLngUser(null)
 

    setOpen(!open);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return setError("Géolocalisation refusée");
      case error.POSITION_UNAVAILABLE:
        return setError("Position inconnue");
      case error.TIMEOUT:
        return setError("Chargement de la positon expiré");
      case error.UNKNOWN_ERROR:
        return setError("Erreur inconnue");
      default:
        return setError("Erreur inconnue");
    }
  };
  return <div>{error && <Modale error={error} open={open} />}</div>;
}