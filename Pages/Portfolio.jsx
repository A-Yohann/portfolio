import React, { memo } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import ciseaux from '../src/assets/ciseaux.png';
import calculatrice from '../src/assets/calculatrice.png';
import morpion from '../src/assets/morpion.png';
import manette from "../src/assets/manette.png";
import pendu from "../src/assets/pendu.png";
import magic from "../src/assets/magic.png";
import expedition from "../src/assets/expedition33.avif";
import logo from "../src/assets/bureau.jpg";
import bg3 from "../src/assets/bg3.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default memo(function Portfolio() {

  const projectsJeux = [
    {
      title: "Morpion",
      description: "Un jeu de Morpion interactif en JavaScript.",
      image: morpion,
      link: "https://morpionyohann.netlify.app"
    },
    {
      title: "Pierre Feuille Ciseaux",
      description: "Jeu classique Pierre, Feuille, Ciseaux en ligne.",
      image: ciseaux,
      link: "https://a-yohann.github.io/Pierre-Feuille-Ciseaux/"
    },
    {
      title: "Calculatrice",
      description: "Calculatrice simple mais fonctionnelle en React.",
      image: calculatrice,
      link: "https://a-yohann.github.io/calculatrice/"
    },
    {
      title: "Le Juste Prix",
      description: "Jeu interactif Le Juste Prix.",
      image: manette,
      link: "https://a-yohann.github.io/juste-prix/"
    },
    {
      title: "Le Pendu",
      description: "Le jeu du Pendu avec interface moderne.",
      image: pendu,
      link: "https://a-yohann.github.io/le-pendu/"
    }
  ];

  return (
    <>
      <div className="container my-5">
        {/* Titre centré */}
        <h1 className="text-center mb-4 pt-5">Portfolio</h1>
        <p className='text-center mb-4'>Voici quelques projets que j'ai pu réaliser pour m'entrainer</p>
        <h2 className='text-center mb-4'>Mes projets (jeu) réaliser</h2>

        {/* Carrousel des projets jeux */}
        <Carousel fade interval={4000} className="my-5">
          {projectsJeux.map((project, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  className="d-block"
                  src={project.image}
                  alt={project.title}
                  style={{
                    maxHeight: '250px',  
                    width: 'auto',
                    objectFit: 'cover',
                    margin: '0 auto'
                  }}
                />
              </div>
              <Carousel.Caption className=" p-3 rounded">
                {/* <h3>{project.title}</h3>
                <p>{project.description}</p> */}
                <Button variant="light" href={project.link} target="_blank" className='btn btn-cartoon'>Voir plus</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Partie HTML/CSS */}
      <div className='container my-5'>
        <h2 className='text-center mb-4'>Voici des projets realiser en html/css</h2>

        <div className="d-flex justify-content-center flex-wrap gap-4">

          <div className="card" style={{ width: '18rem' }}>
            <img src={expedition} alt="image d'un cahier et d'ordi " className="card-img-top" style={{height: '200px', width: '100%', objectFit: 'cover', margin: '0 auto', display: 'block', background:'black'}} />
            <div className="card-body text-center">
              <h5 className="card-title">Projet Expedition 33</h5>
              <a href="https://a-yohann.github.io/projet-expedition-33/" target='_blank' className="btn btn-cartoon">Voir plus</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={bg3} alt="image d'un cahier et d'ordi" className="card-img-top" style={{height: '200px', width: '100%', objectFit: 'cover', margin: '0 auto', display: 'block', background:'black'}} />
            <div className="card-body text-center">
              <h5 className="card-title">Projet Baldur's Gate 3</h5>
              <a href="https://a-yohann.github.io/projet-baldur-gate-3/" target='_blank' className="btn btn-cartoon">Voir plus</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={magic} alt="image d'un cahier et d'ordi " className="card-img-top" style={{height:'200px', objectFit:'cover'}} />
            <div className="card-body text-center">
              <h5 className="card-title">Projet Magic</h5>
              <a href="https://a-yohann.github.io/projet-magic/" target='_blank' className="btn btn-cartoon">Voir plus</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src={logo} alt="image d'un cahier et d'ordi " className="card-img-top" style={{height: '200px', width: '100%', objectFit: 'cover', margin: '0 auto', display: 'block', background:'black'}} />
            <div className="card-body text-center">
              <h5 className="card-title">Projet Espace Renovation</h5>
              <a href="https://a-yohann.github.io/Projet-Espace-Renovation/" target='_blank' className="btn btn-cartoon">Voir plus</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
});
