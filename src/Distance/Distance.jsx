import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Map from "../Maps/Map";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Transport from "./img/transport.svg";
import "./Distance.css";
const H2 = styled.h2`
  vertical-align: inherit;
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => (props.theme.mode === "dark" ? "#0db3c7" : "#040c2c")};
  text-transform: capitalize;
  letter-spacing: -2px;
  margin-bottom: 50px;
  text-align: center;
`;
export default function Distance() {
  const [t] = useTranslation("global");
  return (
    <section id="map">
      <Container>
        <H2> {t("map.distance")}</H2>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <p style={{ paddingTop: 30 }}>
            {t("map.explication1")}
            </p>
            <p>
            {t("map.explication2")}
            </p>
            <p>  {t("map.explication3")} </p>
            <div className="conteneur-transport">
              <img className="transport" src={Transport} alt=" transport" />
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <Map />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
