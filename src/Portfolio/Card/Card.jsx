/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import AntCard from "./AntCard";
import Data from "../../data";

import AOS from "aos";
import "aos/dist/aos.css";

function CardPortfolio() {
  
  const[x , setX]= useState([]);
  useEffect(() => {
    if(x)
    console.log(x)
  }, [x])

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        {x.length>0 &&
          x.map((element) => (
           
            <AntCard
              key={element.title}
              title={element.title}
              image={element.image}
              description={element.description}
              project={element.project}
              github={element.github}
              githubDispo={element.githubDispo}
            />
          ))}
      </div>
      <Data data={(data) => setX(data)  } />
    </>
  );
}
AOS.init();
export default CardPortfolio;
