import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function CewlNavbar() {
  return (
    <Navbar expand="md">
      <Navbar.Brand>HALP</Navbar.Brand>
      <Navbar.Toggle aria-controls="halp-nav" />
      <Navbar.Collapse id="halp-nav" className="justify-content-end">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CewlNavbar;
