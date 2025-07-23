import React, { memo } from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-3">
            <h5>À propos</h5>
            <p>
              Ceci est un exemple de footer en 3 colonnes avec Bootstrap 5 dans React.
            </p>
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
                  Contact
                </a>
              </li>
              <li>
                <a href="#!" className="text-white text-decoration-none">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <address>
              123 Rue Exemple<br />
              Ville, Pays<br />
              Email:{" "}
              <a
                href="mailto:contact@monsite.com"
                className="text-white text-decoration-none"
              >
                contact@monsite.com
              </a>
              <br />
              Téléphone: +33 1 23 45 67 89
            </address>
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
