import React from 'react';
import banane from '../assets/dev.jpg';
import dev2 from '../assets/dev2.jpg';
import '../App.css';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero-section position-relative text-white">
        <img 
          className="img-fluid w-100" 
          style={{ maxHeight: '70vh', objectFit: 'cover' }} 
          src={banane} 
          alt="image développeur web" 
        />
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center">
          <h1>Bonjour, je suis Yohann</h1>
          <h3>Développeur web fullstack</h3>
          <a href="#apropos" className="btn btn-cartoon mt-3">En savoir plus</a>
        </div>
      </section>

      {/* À propos + compétences */}
      <section id="apropos" className="container my-5">
        <div className="row shadow p-4 bg-white rounded align-items-center">
          
          {/* Colonne gauche : image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img 
              className="img-fluid rounded w-100" 
              src={dev2} 
              alt="image développeur web"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>

          {/* Colonne droite : texte */}
          <div className="col-md-6">
            {/* Texte principal */}
            <h4>A propos</h4>
            <hr/>
            <p>
              Bonjour, je suis Yohann, étudiant à Talis Business School à Périgueux. 
              Je suis en formation DWMM. Avant de commencer cette formation, 
              j'ai appris différents langages en autodidacte. J'améliore mon Portfolio 
              avec les compétences acquises durant la formation.
            </p>
            <div className='d-flex justify-content-start mt-3 mb-4'>
              <a href="https://a-yohann.github.io/C.V-yohann/" target='_blank' className="btn btn-danger btn-cartoon">
                Consulter le CV
              </a>
            </div>

            {/* Nouveau texte : Mon savoir-faire */}
            <h5 className="mt-4">Mon savoir-faire</h5>
            <hr/>
            <p>
              Je développe des applications web complètes en utilisant HTML, CSS, 
              JavaScript, (PHP bientot). Je sais également travailler sur des projets 
              responsive et optimiser l’expérience utilisateur pour tous les écrans.
            </p>
          </div>
        </div>

        {/* Compétences */}
        <div className="row mt-5">
          <div className="col-12">
            <h4>Mes compétences</h4>
            <hr/>
            <div className="skills-bounce-container d-flex flex-wrap gap-4 justify-content-center mt-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-bounce" alt="HTML5" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-bounce" alt="CSS3" style={{width:'100px'}}/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-bounce" alt="JavaScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-bounce" alt="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="skill-bounce" alt="PHP" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
