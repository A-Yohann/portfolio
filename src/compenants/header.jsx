// Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
     <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/mentions-legales">Mentions Légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
