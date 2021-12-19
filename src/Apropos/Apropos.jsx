import React from "react";
import "./Apropos.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import Moi from "./ImgApropos/Moi.png";
import Pdf from "./ImgApropos/BEKRI_MEHDI_CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Apropos() {
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
            <H6>{t("apropos.moi")}</H6>
            <H2> {t("apropos.parcours")} </H2>
            <P>
            {t("apropos.descriptionApropos1")} 
            </P>
            <P>
            {t("apropos.descriptionApropos2")} 
            </P>
            <Button
              style={{ marginTop: "10px" }}
              href={Pdf}
              color="transparent"
              target="_blank"
              className="btn"
              download
            >
               {t("apropos.telecharger")} 
            </Button>
          </div>
        </Col>
      </Row>
     
    </Container>
  );
}

export default Apropos;
