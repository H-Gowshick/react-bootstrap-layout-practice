import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../App.css";
import { CgProfile } from "react-icons/cg";

function Navigation() {
  return (
    <Navbar expand="lg" className="nav-custom">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"> {/* Centering the Nav links */}
            <Nav.Link className="" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="ms-lg-5" href="#About">
              About
            </Nav.Link>
            <NavDropdown
              className="ms-lg-5"
              title="Service"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="" href="#profile">
              <CgProfile size={25} /> {/* Change the size here */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
