import React, { memo } from 'react';
import courbe from '../src/assets/courbe.jpg';
import ciseaux from '../src/assets/ciseaux.png';
import calculatrice from '../src/assets/calculatrice.png';
import morpion from '../src/assets/morpion.png';
import manette from "../src/assets/manette.png";
import pendu from "../src/assets/pendu.png";
import webDesigner from"../src/assets/webdesign.png";
export default memo(function Portfolio() {
  return (
    <> <img className="img-fluid hero-img w-100" src={courbe} alt="image développeur web" />
    
    <div className="container my-5">
      {/* Titre centré */}
      <h1 className="text-center mb-4">Portfolio</h1>
      <p className='text-center mb-4 '>Voici quelques projets que j'ai pu réaliser pour m'entrainer</p>
      <h2 className='text-center mb-4'> Mes projets (jeu) realiser </h2>

      <div className="d-flex justify-content-center flex-wrap gap-4">
        {/* Carte 1 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={morpion} alt="image de morpion" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Morpion</h5>
            <p className="card-text">
              Contenu de la carte numéro 1.
            </p>
            <a href="https://morpionyohann.netlify.app" target='_blank' className="btn btn-primary">Voir plus</a>
          </div>
        </div>

        {/* Carte 2 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={ciseaux} alt="image de ciseaux" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Pierre Feuille Ciseaux</h5>
            <p className="card-text">
              Contenu de la carte numéro 2.
            </p>
            <a href="https://a-yohann.github.io/Pierre-Feuille-Ciseaux/" target="blank" className="btn btn-primary">Voir plus</a>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={calculatrice} alt="image d'une calculatrice" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Calculatrice</h5>
            <p className="card-text">
              Contenu de la carte numéro 3.
            </p>
            <a href=" https://a-yohann.github.io/calculatrice/" target='_blank' className="btn btn-primary">Voir plus</a>
          </div>
        </div>

        {/*Carte 4*/}
        <div className="card" style={{ width: '18rem' }}>
          <img src={manette} alt="image d'une manette " className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Le juste Prix </h5>
            <p className="card-text">
              Contenu de la carte numéro 4.
            </p>
            <a href="https://a-yohann.github.io/juste-prix/" target='_blank' className="btn btn-primary">Voir plus</a>
          </div>
        </div>

        {/*Carte 5*/}
        <div className="card" style={{ width: '18rem' }}>
          <img src={pendu} alt="image du jeu du pendu " className="card-img-top" />
          <div className="card-body text-center">
            <h5 className="card-title">Le Pendu </h5>
            <p className="card-text">
              Contenu de la carte numéro 5.
            </p>
            <a href="https://a-yohann.github.io/le-pendu/" target='_blank' className="btn btn-primary">Voir plus</a>
          </div>
        </div>
      </div>
    </div>
    <div className='container my-5'>
        <h2 className='text-center mb-4'>Voici des projets realiser en html/css</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4">
              <div className="card" style={{ width: '18rem' }}>
              <img src={webDesigner} alt="image d'un cahier et d'ordi " className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title"> Projet Expedition 33 </h5>
                <a href="https://a-yohann.github.io/projet-expedition-33/" target='_blank' className="btn btn-primary">Voir plus</a>
              </div>
            </div>


              <div className="card" style={{ width: '18rem' }}>
              <img src={webDesigner} alt="image d'un cahier et d'ordi " className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title"> Projet Baldu's Gate 3 </h5>
                <a href="https://a-yohann.github.io/projet-baldur-gate-3/" target='_blank' className="btn btn-primary">Voir plus</a>
              </div>
            </div>
          </div>
      </div>
    </>
  );
});
