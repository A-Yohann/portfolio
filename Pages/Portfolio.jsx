import React, { memo } from 'react';
import ciseaux from '../src/assets/ciseaux.png';
import calculatrice from '../src/assets/calculatrice.png';
import morpion from '../src/assets/morpion.png';
import manette from "../src/assets/manette.png";
import pendu from "../src/assets/pendu.png";
import magic from "../src/assets/magic.png";
import expedition from "../src/assets/expedition33.avif";
import logo from "../src/assets/bureau.jpg";
import bg3 from "../src/assets/bg3.png";
import japon from "../src/assets/japon.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

export default memo(function Portfolio() {

  const projectsHTML = [
    { title: "Expedition 33", image: expedition, link: "https://a-yohann.github.io/projet-expedition-33/" },
    { title: "Baldur's Gate 3", image: bg3, link: "https://a-yohann.github.io/projet-baldur-gate-3/" },
    { title: "Projet Magic", image: magic, link: "https://a-yohann.github.io/projet-magic/" },
    { title: "Espace Rénovation", image: logo, link: "https://a-yohann.github.io/Projet-Espace-Renovation/" },
    { title: "Projet EPCF", image: japon, link: "https://a-yohann.github.io/projet-EPCF/" },
  ];

  const projectsJeux = [
    { title: "Morpion", description: "Jeu de Morpion en JavaScript.", image: morpion, link: "https://morpionyohann.netlify.app" },
    { title: "Pierre-Feuille-Ciseaux", description: "Jeu classique en JavaScript.", image: ciseaux, link: "https://a-yohann.github.io/Pierre-Feuille-Ciseaux/" },
    { title: "Calculatrice", description: "Calculatrice en React.", image: calculatrice, link: "https://a-yohann.github.io/calculatrice/" },
    { title: "Le Juste Prix", description: "Jeu interactif en JavaScript.", image: manette, link: "https://a-yohann.github.io/juste-prix/" },
    { title: "Le Pendu", description: "Jeu du Pendu en JavaScript.", image: pendu, link: "https://a-yohann.github.io/le-pendu/" },
  ];

  return (
    <div className="container my-5 pt-4">

      {/* Titre */}
      <div className="text-center mb-5">
        <h1 className="mb-2">Portfolio</h1>
        <div className="portfolio-divider mx-auto mb-3"></div>
        <p className="text-muted">Quelques projets réalisés pour m'entraîner</p>
      </div>

      {/* Projets HTML/CSS */}
      <section className="mb-5">
        <p className="portfolio-section-label text-center text-uppercase text-muted mb-4">Projets HTML / CSS</p>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          {projectsHTML.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100 portfolio-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="portfolio-badge mb-2">HTML / CSS</span>
                  <h5 className="card-title">{project.title}</h5>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cartoon mt-auto text-center"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jeux interactifs */}
      <section>
        <p className="portfolio-section-label text-center text-uppercase text-muted mb-4">Jeux interactifs</p>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          {projectsJeux.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100 portfolio-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="portfolio-badge mb-2">JavaScript</span>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.875rem' }}>{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cartoon mt-auto text-center"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
});