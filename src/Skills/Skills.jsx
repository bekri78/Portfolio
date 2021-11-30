import React, { useState } from "react";
import dataSkills from "./dataSkills";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";
import Buttonskills from "./button";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "./Search";
import Telephone from "./telephone.svg";

AOS.init();

const H6 = styled.h6`
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #0db3c7;
  font-weight: 600;
  margin-bottom: 15px;
  vertical-align: inherit;
`;

const H2 = styled.h2`
  font-size: 38px;
  font-weight: 700;
  color: ${(props) => (props.theme.mode === "dark" ? "#e23e61" : "#040c2c")};
  text-transform: capitalize;
  letter-spacing: -2px;
  vertical-align: inherit;
`;

const Text = styled.p`

margin-bottom: 40px;
color: ${(props) => props.theme.mode}
margin-top: 0;
`;
// style={{backgroundColor: 'white'}}

function Skills() {
  const [skill, setSkills] = useState(dataSkills);
  const [searchValue, setSearchValue] = useState("");
  const setSearchValuee = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <div className="skill_content_two">
              <div className="section_title_two">
                <H6> Mes compétences en vedette </H6>
                <H2> Quelques faits intéressants sur moi.</H2>
              </div>
              <Text>
                {" "}
                Orienté Front-end, j'ai un fort interêt pour les applications
                web qui permettent d'ameliorer, moderniser et faciliter le
                travail des collaborateurs dans une entreprise. C'est dans cette
                optique que j'imagine et conçois des applications web. Par
                ailleurs cette vision de la digitalisation dans une entreprise
                me pousse naturellement a utiliser des ressources back-end dans
                mes projets.{" "}
              </Text>
              <Row>
                <Search setSearchValue={setSearchValuee} />
              </Row>
              <Row>
                {skill
                  .filter((name) => name.includes(searchValue))
                  .map((skill, index) => (
                    <Buttonskills key={index} competences={skill} >
                    
                      {skill}
                    </Buttonskills>
                  ))}
              </Row>
            </div>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <img className="fact_img" src={Telephone} alt="" />
          </Col>
        </Row>
      </Container>
      <div id="aPropos"></div>
    </section>
  );
}

export default Skills;
