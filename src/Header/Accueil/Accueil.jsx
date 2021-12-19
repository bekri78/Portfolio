import React from "react";
import "./Accueil.css";
import { useTranslation } from "react-i18next";
import Homme from "./ImageAccueil/homme.png";
import Cplus from "./ImageAccueil/javascript.png";
import Loop from "./ImageAccueil/loop.png";
import Ombre from "./ImageAccueil/ombre.png";
import Php from "./ImageAccueil/csslogo.png";
import Table from "./ImageAccueil/table.png";
import Accolade from "./ImageAccueil/accolade.png";
import AccoladeDeux from "./ImageAccueil/accolade2.png";
import Fond from "./ImageAccueil/banner_img.svg";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";
const Name = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  padding-bottom: 30px;
  letter-spacing: -1.01px;
  font-family: Montserrat, sanSerif;
  margin-bottom: 0;
  vertical-align: inherit;
  color: ${(props) => (props.theme.mode === "dark" ? "#0db3c7" : "040c2c")};
  text-shadow: 1.5px 1px 1px rgba(230, 219, 219, 0.6);
  @media only screen and (max-width: 1253px) and (min-width: 992px) {
    width: 60%;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 320px) {
    margin-top: 50px;
    font-size: 35px;
  }
`;

const Front = {
  color: "red",
};

var animation = {
  animationDuration: "500ms",
  animationDelay: "0ms",
  animationIterationCount: 1,
  opacity: 1,
};
function Accueil(props) {
  const [t] = useTranslation("global");
  return (
    <section className="frelencer_banner_area" id="home">
      <div className="home_bubble">
        <div className="bubble b_one"></div>
        <div className="bubble b_two"></div>
        <div className="bubble b_three"></div>
        <div className="bubble b_four"></div>
        <div className="bubble b_five"></div>
        <div className="bubble b_six"></div>
      </div>
      <img
        className="react-reveal fadeInRight s_shap "
        id="test"
        src={Fond}
        alt=""
      />

      <Container fluid className="containerAccueil">
        <Row>
          <Col lg={6}>
            <div className="frelencer_content">
              <div className="react-reveal fadeInUp t_color" style={animation}>
                <Name>
                {t("home.introAccueil")} <br></br>{t("home.introAccueil2")}
                  <span style={Front}>{t("home.introAccueil3")}</span>
                </Name>
              </div>

              <h4
                className="react-reveal fadeInUp"
                style={{
                  animationDuration: "700ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              >
                <span className="baniere">
                  <font style={{ verticalAlign: "inherit" }}>
                  {t("home.introbanderole")}{" "}
                  </font>
                </span>
              </h4>
              <a
                href="#contact"
                className="react-reveal fadeInUp theme_btn active"
                style={{
                  animationDuration: "900ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              >
                <font style={{ verticalAlign: "inherit" }}>{t("home.introbtn")}</font>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="frelencer-img">
              <img
                className="react-reveal fadeInLeft f_img_one"
                src={Homme}
                alt="homme"
                style={{
                  animationDuration: "1400ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              />
              <img
                className="react-reveal fadeInRight f_img_two"
                src={Table}
                alt="table"
                style={{
                  animationDuration: "1200ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              />
              <img
                className="react-reveal fadeInDown f_img_four"
                src={Ombre}
                alt="ombre"
                style={{
                  animationDuration: "1600ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              />
              <div
                className="react-reveal fadeInDown f_img_five"
                style={{
                  animationDuration: "2000ms",
                  animationDelay: "0ms",
                  animationIterationCount: 1,
                  opacity: 1,
                }}
              >
                <img src={Php} alt="php" />
              </div>
              <div className="f_img_six">
                <img src={Cplus} alt="C++" />
              </div>
              <div className="f_img_seven">
                <img src={Loop} alt="loop" />
              </div>
              <div className="f_img_eight">
                <img src={Accolade} alt="accolade" />
              </div>
              <div className="f_img_nine">
                <img className="" src={AccoladeDeux} alt="accolade2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Accueil;
