import React from "react";
import "./Apropos.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import Moi from "./ImgApropos/Moi.png";
import Pdf from "./ImgApropos/MEHDI_BEKRI_2021.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Apropos() {
  const H6 = styled.h6`
    vertical-align: inherit;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #0db3c7;
    font-weight: 600;
    margin-bottom: 15px;
  `;
  const H2 = styled.h2`
    vertical-align: inherit;
    font-size: 38px;
    font-weight: 700;
    color: ${(props) => (props.theme.mode === "dark" ? "#e23e61" : "#040c2c")};
    text-transform: capitalize;
    letter-spacing: -2px;
  `;
  const P = styled.p`

    color: ${(props) => props.theme.mode}
    margin: 10px;
    `;
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="6" lg="6" className="text-center">
          <img
            className="train img-responsive center-block"
            src={Moi}
            alt="moi"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
          <div
            className="section_title_two"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <H6>A propos de moi</H6>
            <H2> Mon parcours </H2>
            <P>
              {" "}
              Conducteur de train à la SNCF, j'ai toujours été attiré
              par l'innovation et la digitalisation dans mon entreprise. C'est
              ce qui ma poussé a entamer une formation hors temps de travail sur
              la plateforme Openclassrooms, afin de me former au developpement
              Front-End{" "}
            </P>
            <P>
              J'ai par la suite engagé une reconversion professionnel
              à la WILD CODE SCOOL sur les technologies
              REACT/NODE  afin de parfaire mes connaissances
              dans le domaine du front et du web
            </P>
            <Button
              style={{ marginTop: "10px" }}
              href={Pdf}
              color="transparent"
              target="_blank"
              className="btn"
              download
            >
              Telecharger mon CV
            </Button>
          </div>
        </Col>
      </Row>
      <div id="contact"></div>
    </Container>
  );
}

export default Apropos;
