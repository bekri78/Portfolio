import React from "react";
import "./Portfolio.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import CardPortfolio from "./Card/Card.jsx";
function Portfolio() {
    const [t] = useTranslation("global");
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
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="section_title_two text-center">
              <H6>{t("portfolio.monPortfolio")}</H6>
              <H2> {t("portfolio.travaux")}</H2>
            </div>
          </Col>
        </Row>
        <Col>
          <Row>
            <CardPortfolio />
          </Row>
        </Col>
      </Container>
      <div id="skill"></div>
    </section>
  );
}

export default Portfolio;
