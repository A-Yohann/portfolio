import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../../Pages/Portfolio';
import Home from './Home';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto w-100">

<div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>Yohann</h5>
            <address>
              <ul className='list-unstyled'>
                <li className='text-white text-decoration-none'>
                  16444 Route de Marsal
                </li>
                <li className='text-white  text-decoration-none'>
                  24130, La Force, France 
                </li>
                <li className='text-white text-decoration-none'>
                  06.31.28.44.64
                </li>
                <li className='text-white text-decoration-none'>
                  at.yohann@gmail.com
                </li>
              </ul>
            </address>  
            {/*ajout de logo*/}
            
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="text-white text-decoration-none">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white text-decoration-none">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link to="/mention" className="text-white text-decoration-none">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Mes dernieres realisation</h5>
            <ul className='list-unstyled'>
              <li className='text-white text-decoration-none'>
                Morpion
              </li>
              <li className='text-white text-decoration-none'>
                Pierre,Feuille,Ciseaux
              </li>
              <li className='text-white text-decoration-none'>
                Calculatrice 
              </li>
              <li className='text-white text-decoration-none'>
                Juste Prix
              </li>
              <li className='text-white text-decoration-none'>
                Le jeu du pendu
              </li>
              <li className='text-white text-decoration-none'>
                Projet Expedition 33
              </li>
              <li className='text-white text-decoration-none'>
                Projet Baldur's Gate 3
              </li>
            </ul>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="text-center">
          &copy; 2025 MonSite. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
