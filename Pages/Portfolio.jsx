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
import f1Img from "../src/assets/f1-actus.png";
import horlogeImg from "../src/assets/type-de-mecanisme.avif";
import assistantImg from "../src/assets/mohamed_hassan-analysis-3782319_1920.jpg";
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

  const projectsBackend = [
    {
      title: "Ton Assistant",
      description: "Assistant personnel développé en PHP / Symfony.",
      image: assistantImg,
      link: "https://tonassistant.fr"
    },
    {
      title: "F1 Zone",
      description: "Site dédié à la Formule 1 développé en PHP / Symfony.",
      image: f1Img,
      link: "http://f1-zone.duyo5958.odns.fr"
    },
    {
      title: "Horloge Ancienne",
      description: "Site vitrine développé en PHP / Symfony.",
      image: horlogeImg,
      link: "http://horloge-ancienne.duyo5958.odns.fr"
    },
  ];

  const projectsJeux = [
    { title: "Morpion", description: "Jeu de Morpion en JavaScript.", image: morpion, link: "https://morpionyohann.netlify.app" },
    { title: "Pierre-Feuille-Ciseaux", description: "Jeu classique en JavaScript.", image: ciseaux, link: "https://a-yohann.github.io/Pierre-Feuille-Ciseaux/" },
    { title: "Calculatrice", description: "Calculatrice en React.", image: calculatrice, link: "https://a-yohann.github.io/calculatrice/" },
    { title: "Le Juste Prix", description: "Jeu interactif en JavaScript.", image: manette, link: "https://a-yohann.github.io/juste-prix/" },
    { title: "Le Pendu", description: "Jeu du Pendu en JavaScript.", image: pendu, link: "https://a-yohann.github.io/le-pendu/" },
  ];

  const CardLink = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-cartoon mt-auto text-center"
    >
      {children}
    </a>
  );

  return (
    <div className="container my-5 pt-4">

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
                  <CardLink href={project.link}>Voir le projet</CardLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projets PHP / Symfony */}
      <section className="mb-5">
        <p className="portfolio-section-label text-center text-uppercase text-muted mb-4">Projets PHP / Symfony</p>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {projectsBackend.map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100 portfolio-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <span className="portfolio-badge mb-2">PHP / Symfony</span>
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.875rem' }}>{project.description}</p>
                  <CardLink href={project.link}>Voir le projet</CardLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jeux interactifs */}
      <section className="mb-5">
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
                  <CardLink href={project.link}>Voir le projet</CardLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
});