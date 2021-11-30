/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import AntCard from './AntCard'

import AOS from "aos";
import "aos/dist/aos.css";

import Data from '../../data'
 
function CardPortfolio() {
  return (
<div style={{display:'flex', flexWrap:'wrap', margin:'auto', justifyContent:'center'}}>
 {
   Data && Data.map((element)=>(

     <AntCard
     key={element.title}
     title={element.title}
     image={element.image}
     description={element.description}
     project={element.project}
     github={element.github}
     githubDispo={element.githubDispo}
     />
   )

   ) 

 } 
</div>
    
  );
}
AOS.init();
export default CardPortfolio;
