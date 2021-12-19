import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const H6 = styled.h6`
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  color: #fff;
  padding-top: 0;
  margin-bottom: 5px;
`;
const P = styled.p`
  font: 400 10px/18px Montserrat, sans-serif;
  color: #fff;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export default function Footer() {
  const [t] = useTranslation("global");
  return (
    <section className="footer-area-two">
      <Container style={{ marginTop: "0px" }}>
        <Row className="footer-content  align-items-center">
          <Col sm="4">
            <ul className="react-reveal list_style">
              <li className="li0">
                <a
                  href="https://www.linkedin.com/in/mehdi-bekri-37093b165"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
                </a>
              </li>
              <li className="li1">
                <a
                  href="https://www.facebook.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                </a>
              </li>
              <li className="li2">
                <a
                  href="https://twitter.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
                </a>
              </li>
              <li className="li3">
                <a
                  href="https://github.com/bekri78"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="8" className="text-right">
            <H6>{t("footer.faitEnReact")}</H6>
            <P>© 2021 BEKRI Mehdi - {t("footer.libre")} </P>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
