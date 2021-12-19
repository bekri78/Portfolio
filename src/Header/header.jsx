import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import France from "./img/france.svg";
import Italy from "./img/italy.svg";
import Spain from "./img/spain.svg";
import United from "./img/united.svg";
import Allemand from "./img/de.svg";
import Japonais from "./img/jp.svg";
import Chinois from "./img/cn.svg";
import "./LEHADER.css";
var navigation = {
  font: "600 14px/30px Montserrat,sans-serif",
  color: "#fff",
  textTransform: "uppercase",
  position: "relative",
  padding: "8px",
  cursor: "pointer",
  transition: "all .2s linear",
};

function Header(props) {
  const [t] = useTranslation("global");
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    let y = window.scrollY;
    if (y >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      className={navbar ? "navbar active" : "navbar"}
      collapseOnSelect
      expand="sm"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" expand="lg">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={navigation}>
          {t("header.accueil")}
          </Nav.Link>
          <Nav.Link href="#service" style={navigation}>
            {t("header.service")}
          </Nav.Link>
          <Nav.Link href="#portfolio" style={navigation}>
            {t("header.portfolio")}
          </Nav.Link>
          <Nav.Link href="#skill" style={navigation}>
            {t("header.skills")}
          </Nav.Link>
          
          <Nav.Link href="#map" style={navigation}>
            {t("header.carte")}
          </Nav.Link>
           
          <NavDropdown
            title={t("header.langue")}
            className="liens"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("fr")}
            >
              FR <img className="country" src={France} alt="france" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("en")}
            >
              EN <img className="country" src={United} alt="united" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("es")}
            >
              ES <img className="country" src={Spain} alt="spain" />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("it")}
            >
              IT <img className="country" src={Italy} alt="italy" />
            </NavDropdown.Item>{" "}
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("db")}
            >
              DB <img className="country" src={Allemand} alt="allemand" />
            </NavDropdown.Item>{" "}
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("jp")}
            >
              JP <img className="country" src={Japonais} alt="japonais" />
            </NavDropdown.Item>{" "}
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="lng"
              onClick={() => props.changeLng("ch")}
            >
              CH <img className="country" src={Chinois} alt="chinois" />
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={t("header.theme")} id="collasible-nav-dropdown">
            <NavDropdown.Item
              onClick={() => props.changeWord("light")}
              id="changeTheme"
            >
              Light
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => props.changeWord("dark")}
              id="changeTheme"
            >
                  <NavDropdown.Divider />
              Sombre
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#aPropos" style={navigation}>
            {t("header.apropos")}
          </Nav.Link>{" "}
          <Nav.Link href="#contact" style={navigation}>
            {t("header.contact")}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
