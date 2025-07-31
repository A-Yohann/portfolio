import React, { memo } from 'react';

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
                <a href="#!" className="text-white text-decoration-none">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Me contacter
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Mes dernieres realisation</h5>
            <ul className='list-unstyled'>
              <li className='text-white text-decoration-none'>
                Fresh food
              </li>
              <li className='text-white text-decoration-none'>
                Restaurant akira
              </li>
              <li className='text-white text-decoration-none'>
                Espaces bien etre 
              </li>
              <li className='text-white text-decoration-none'>
                SEO
              </li>
              <li className='text-white text-decoration-none'>
                Creation d'une API
              </li>
              <li className='text-white text-decoration-none'>
                Maquette d'un site
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
