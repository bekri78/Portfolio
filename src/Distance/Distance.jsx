import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../Maps/Map";
import Transport from "./img/transport.svg";
import './Distance.css'

export default function Distance() {
  return (
    <section id='map'>
      <Container>
            <h1 style={{textAlign:'center'}}>Distance</h1>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6" >
            <p style={{paddingTop:30}} >
         Vous êtes recruteur , ou futur collaborateur et souhaitez me rencontrer ?  
         </p>
         <p>
         Je vous donne la possiblité  d'entrer votre adresse afin  de voir  les différentes solutions de transports,
les mieux adaptées pour nous retrouver.
         </p>
<p> À très vite.</p>
            <div className='conteneur-transport'>

            <img   className ='transport' src={Transport} alt=" transport" />
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6" className='conteneur-transport' >
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
