import React from "react";
import "./Card.css";
import arrow from "./ImgCard/cta-arrow.png";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const H3 = styled.h3`
  font-size: 29.8px;
  color: white;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em black;
`;
function CardPortfolio() {
  return (
    <Container style={{ marginTop: "0px" }}>
      <Row>
        <Col xs="12" sm="6" md="6" lg="4">
          <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <div className="flip-box">
              <div className="flip-box-front tef text-center">
                <div className="inner color-white">
                  <H3>Registre TRS</H3>
                  <p className="downText">
                    Digitalisation processus metier SNCF
                  </p>
                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>Formulaire TRS</Card.Title>
                    <Card.Text>
                      <span style={{ color: "red" }}>Context:</span> Declarer
                      ses heures de productivité sur feuille (90/mois). Pour le
                      dirigeant retranscrire ces informations sur son tableau
                      excell. <span style={{ color: "green" }}>Solution:</span>{" "}
                      Tableau CRUD permettant d'exporter les données au format
                      EXCELL. Techno : Html, Css, JS, Node, Express, MongoDB
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://tour-en-fosse.herokuapp.com/",
                          "_blank"
                        )
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {" "}
                      Plus de details sur mon depos Github:{" "}
                      <a
                        href="https://github.com/bekri78/projetTefAcheres"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6" md="6" lg="4">
          <div
            className="box-item "
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="flip-box">
              <div className="flip-box-front ima text-center">
                <div className="inner color-white">
                  <H3>Interface</H3>
                  <p className="downText">
                    Digitalisation processus metier SNCF{" "}
                  </p>
                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>Interface Mouvement</Card.Title>
                    <Card.Text>
                      Interface permettant la transmission des taches a
                      effectuées sous forme de todo-list avec differentes
                      sections.{" "}
                      <span style={{ color: "green" }}>Identifiant:</span>
                      Acheres7826<br></br>{" "}
                      <span style={{ color: "green" }}>Mdp:</span> IloveITNOVEM{" "}
                      : HTML, Css, Javascript, Jquery, Node, Express, MongoDB
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://tood-list-sncf.herokuapp.com/",
                          "_blank"
                        )
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {" "}
                      Plus de details sur mon depos Github:{" "}
                      <a
                        href="https://github.com/bekri78/todoSncf.github.io"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6" md="6" lg="4">
          <div className="box-item" data-aos="fade-up" data-aos-duration="2400">
            <div className="flip-box">
              <div className="flip-box-front food text-center">
                <div className="inner color-white">
                  <H3>Express Food</H3>

                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>EXPRESS Food</Card.Title>
                    <Card.Text>
                      APP web indiquant les restaurants proche de votre
                      position.<br></br>{" "}
                      <span style={{ color: "green" }}>Option: </span>
                      Ajouter un restraurant.<br></br> Un filtre (par etoile,
                      par nom ,entre deux etoiles). Ajouter un
                      commentaire(fictif). Techno: React, API google map
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://bekri78.github.io/expressFood/",
                          "_blank"
                        )
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {" "}
                      Plus de details sur mon depos Github:{" "}
                      <a
                        href="https://github.com/bekri78/expressFood"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6" md="6" lg="4">
          <div className="box-item" data-aos="fade-up" data-aos-duration="1000">
            <div className="flip-box">
              <div className="flip-box-front smith text-center">
                <div className="inner color-white">
                  <H3>Citation Generateur</H3>
                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>Generateur de citation</Card.Title>
                    <Card.Text>
                      Sur le Theme Men In Black, génère une ou plusieur phrase
                      aléatoire, chargé depuis un tableau, utilisation de la
                      boucle for.<br></br>Techno: Html, Css, Javascript
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open(
                          "https://bekri78.github.io/generateur-de-citation-P5-Openclassrooms/",
                          "_blank"
                        )
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {" "}
                      Plus de details sur mon depos Github:{" "}
                      <a
                        href="https://github.com/bekri78/generateur-de-citation-P5-Openclassrooms"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6" md="6" lg="4">
          <div className="box-item" data-aos="fade-up" data-aos-duration="1800">
            <div className="flip-box">
              <div className="flip-box-front onePiece text-center">
                <div className="inner color-white">
                  <H3>Jeux tour par tour</H3>
                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>Generateur de citation</Card.Title>
                    <Card.Text style={{ color: "black" }}>
                      Initiation a la POO avec un jeux tour par tour <br></br>
                      <span style={{ color: "red" }}>Objectif: </span>Recuperer
                      une arme et affronter votre adversaire, il n'en restera
                      qu'un !<br></br> Techno: Html, Css, Js, Jquery, ThreeJs
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open("http://one-piece-game.fr/", "_blank")
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {" "}
                      Plus de details sur mon depos Github:{" "}
                      <a
                        href="https://github.com/bekri78/one-piece-game-P6-Openclassrooms"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        <FontAwesomeIcon icon={faGithub} size="1x" />
                      </a>
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" sm="6" md="6" lg="4">
          <div className="box-item" data-aos="fade-up" data-aos-duration="2400">
            <div className="flip-box">
              <div className="flip-box-front chalet text-center">
                <div className="inner color-white">
                  <H3>Wordpress</H3>

                  <img src={arrow} alt="" className="flip-box-img" />
                </div>
              </div>

              <div className="flip-box-back backWhite text-center">
                <Card className="cardBack" style={{ minHeight: "440px" }}>
                  <Card.Body>
                    <Card.Title>Chalet et Caviar</Card.Title>
                    <Card.Text>
                      Creation d'un site sous wordpress pour un client
                      specialisé dans la vente de chalet de luxe situé a
                      Courchevel (Projet d'Etude).
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        window.open("https://chaletscaviar.fr/", "_blank")
                      }
                    >
                      Decouvrir
                    </Button>
                  </Card.Body>
                  <Card.Footer></Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
AOS.init();
export default CardPortfolio;
