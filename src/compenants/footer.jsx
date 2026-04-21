import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-pro">
      <Container>
        <div className="footer-pro__top">

          <div>
            <p className="footer-pro__brand">Yohann</p>
            <p className="footer-pro__tagline">Développeur web fullstack</p>
            <p className="footer-pro__contact">
              16444 Route de Marsal, 24130 La Force<br />
              06.31.28.44.64<br />
              contact@yohanndufresne.fr
            </p>
          </div>

          <div className="footer-pro__nav-wrapper">
            <div>
              <p className="footer-pro__col-title">Navigation</p>
              <ul className="footer-pro__links">
                <li><NavLink to="/" end>Accueil</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="footer-pro__col-title">Légal</p>
              <ul className="footer-pro__links">
                <li><NavLink to="/mention">Mentions légales</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="footer-pro__col-title">Support</p>
              <ul className="footer-pro__links">
                <li><NavLink to="/contact">Me contacter</NavLink></li>
              </ul>
            </div>
          </div>

        </div>
        <div className="footer-pro__bottom">
            <span>© {new Date().getFullYear()} Yohann. Tous droits réservés.</span>        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);