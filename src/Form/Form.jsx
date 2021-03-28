import React from "react";
import "./Form.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Lettre from "./LETTREmodif.png";
import Swal from "sweetalert2";
init("user_JbLWAM7XNHKUHLEMPWbv1");
const H2 = styled.h2`
  vertical-align: inherit;
  font-size: 38px;
  font-weight: 700;
  color: ${props => props.theme.mode === 'dark' ? '#0db3c7' : '#040c2c'};
  text-transform: capitalize;
  letter-spacing: -2px;
  margin-bottom: 50px;
  text-align: center;
`;
const H6 = styled.h6`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${props => props.theme.mode === 'dark' ? '#e23e61' : '#0db3c7'};
  font-weight: 600;
  margin-bottom: 15px;
  vertical-align: inherit;
`;

const P = styled.p`
color: ${props => props.theme.mode === 'dark' ? '#b9b9b9' : '#677294'};
margin-top: 0;
margin-bottom: 0;
height: 40px;
width: auto;
`
//const MySwal = withReactContent(Swal)
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//import './ContactUs.css';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_enlg8i9",
        "template_459tp1g",
        e.target,
        "user_JbLWAM7XNHKUHLEMPWbv1"
      )
      .then(
        (result) => {
          console.log(result.text);

          Toast.fire({
            icon: "success",
            title: "Envoyer avec succès !",
          });
        },
        (error) => {
          console.log(error.text);
          Toast.fire({
            icon: "error",
            title: "Erreur veuillez réessayer",
          });
        }
      );
    e.target.reset();
  }

  return (
    <section className="form" id=" contact">
      <Container>
        <H2> Contact </H2>
        <Row className="align-items-center">
          <Col  xs="12" sm="12" md="12" lg="5">
            <H6>Vous souhaitez me contacter ?</H6>
            <P>Remplissez ce formulaire, je reviendrais vers vous au plus vite </P>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Form.Row>
                <Form.Group md="4" controlId="formNom">
                  <Form.Control
                    type="text"
                    name="user_name"
                    placeholder="Nom*"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="user_email"
                    placeholder="Email*"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group md="4" controlId="formTelephone">
                  <Form.Control
                    type="text"
                    name="user_number"
                    placeholder="Numero"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress2">
                  <Form.Control
                    type="text"
                    name="user_sujet"
                    placeholder="Sujet*"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row></Form.Row>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Votre message*"
                />
              </Form.Group>
              <Button variant="primary" type="submit" value="Send">
                Envoyer
              </Button>
            </Form>
          </Col>

          <Col xs="12" sm="12" md="12" lg="7" className="imgConteneur">
            <img className="lettre" src={Lettre} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
