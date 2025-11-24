import React from 'react';
import banane from '../assets/dev.jpg';
import '../App.css';
import dev2 from '../assets/dev2.jpg';
import webDesigner from "../assets/webdesign.png"

export default function Home() {
  //  Déclaration correcte du tableau
  const competences = [
    { skill: 'HTML5', level: 90, color: 'bg-danger' },
    { skill: 'CSS3', level: 80, color: 'bg-primary' },
    { skill: 'JavaScript', level: 40, color: 'bg-info' },
    { skill: 'PHP', level: 0, color: 'bg-warning' },
    { skill: 'React', level: 10, color: 'bg-success' }
  ];

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
    <a href="#apropos" className="btn btn-danger mt-3">En savoir plus</a>
  </div>
</section>

      {/* À propos + compétences */}
      <section id="apropos" className="container my-5">
        <div className="row shadow p-4 bg-white rounded">
          <div className="col-12 mb-4">
            <h4>A propos</h4>
            <hr color='bg-primary'/>
            <img className="img-fluid hero-img w-100" src={dev2} alt="image développeur web"style={{ maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto' }} 
/>
            <p className='mt-4'>
              Bonjour, je suis Yohann, étudiant a Talis Buisness School a Perigueux. Je suis en formation DWMM, avant de commencer la formation j'ai appris les differents languages en autodidact. J'ameliorais mon Portfolio avec les compétences aquise durant la formation <br/>
            </p>
            <div className='d-flex justify-content-center mt-3'>
              <a href="https://a-yohann.github.io/C.V-yohann/" target='_blank' className="btn btn-danger btn-cartoon ">Consulter le CV </a>
            </div>
          </div>
          <div className="col12">
            <ul className="list-unstyled">
              <h4>Mes compétences</h4>
<hr/>

<div className="skills-bounce-container d-flex flex-wrap gap-4 justify-content-center mt-4">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-bounce" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-bounce" alt="CSS3"  style={{width:'100px'}}/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-bounce" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-bounce" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="skill-bounce" alt="PHP" />
</div>

            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
