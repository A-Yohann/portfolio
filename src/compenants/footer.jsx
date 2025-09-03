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
            <h5>John Doe</h5>
            <address>
              <ul className='list-unstyled'>
                <li className='text-white text-decoration-none'>
                  40 rue Laure Dielbold
                </li>
                <li className='text-white  text-decoration-none'>
                  69009 Lyon, France 
                </li>
                <li className='text-white text-decoration-none'>
                  10 20 30 40 50 
                </li>
                <li className='text-white text-decoration-none'>
                  john.doe@gamil.com
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
                A venir 
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
