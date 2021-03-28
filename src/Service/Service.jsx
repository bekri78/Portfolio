import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "./ImageService/service.67717712.svg";
import "./Service.css";
import styled from "styled-components";

const Title = styled.h6`
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${(props) => (props.theme.mode === "dark" ? "#0db3c7" : "#0db3c7")};
`;

const TitleTwo = styled.h2`
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

// let color = props => props.theme.mode
// console.log(color.props.theme.mode)

function Service() {
  return (
    <Container fluid className="containerService" id="service">
      <Row className="flex-column-reverse flex-lg-row">
        <Col xs="12" md="12" lg="7">
          <div className="service_img">
            <img src={Image} alt="" />
          </div>
        </Col>

        <Col xs="12" md="12" lg="5">
          <div className="service_content">
            <div className="section_title_two">
              <Title>Ce que je fais ?</Title>
              <TitleTwo>
                Des solutions innovantes pour digitaliser votre entreprise
              </TitleTwo>
            </div>
            <P>
              {" "}
              Je suis Mehdi, un developpeur front basé en Ile-De-France. Je me
              spécialise dans l'interface et le developpement d'application web
              pour digitaliser votre entreprise.{" "}
            </P>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Conception UX et UI
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Conception d'applications web responsives
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Analyse problematiques metier
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div id="portfolio"></div>
    </Container>
  );
}

export default Service;
