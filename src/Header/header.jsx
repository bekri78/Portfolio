import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
          <Nav.Link href="#service" style={navigation}>
            Service
          </Nav.Link>
          <Nav.Link href="#portfolio" style={navigation}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="#skill" style={navigation}>
            Skill
          </Nav.Link>

          <Nav.Link href="#aPropos" style={navigation}>
            A propos
          </Nav.Link>
          <NavDropdown title="Theme" id="collasible-nav-dropdown">
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
              Sombre
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact" style={navigation}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
