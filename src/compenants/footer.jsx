import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="navbar-fun mt-auto w-100">
      <Container fluid>
        <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-start py-3">
          
          {/* Informations contact */}
          <div className="mb-2">
            <h5 className="brand-fun">Yohann</h5>
            <address>
              <ul className="list-unstyled">
                <li>16444 Route de Marsal</li>
                <li>24130, La Force, France</li>
                <li>06.31.28.44.64</li>
                <li>at.yohann@gmail.com</li>
              </ul>
            </address>
          </div>

          {/* Liens utiles */}
          <div className="mb-2">
            <h5>Liens utiles</h5>
            <Nav className="nav-fun-links flex-column">
              <Nav.Link as={NavLink} to="/" end>Accueil</Nav.Link>
              <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Me contacter</Nav.Link>
              <Nav.Link as={NavLink} to="/mention">Mentions légales</Nav.Link>
            </Nav>
          </div>

          {/* Dernières réalisations */}
          <div className="mb-2">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Morpion</li>
              <li>Pierre, Feuille, Ciseaux</li>
              <li>Calculatrice</li>
              <li>Juste Prix</li>
              <li>Le jeu du pendu</li>
              <li>Projet Expedition 33</li>
              <li>Projet Baldur's Gate 3</li>
              <li>Projet Magic</li>
              <li>Espace Renovation</li>
            </ul>
          </div>

        </div>

        <hr className="bg-white" />
        <div className="text-center text-white">
          &copy; 2025 MonSite. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
