import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-fun fixed-top" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="brand-fun">Yohann</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="navbar-burger"
        >
          <div className={`burger-icon ${expanded ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-fun-links">
            <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}