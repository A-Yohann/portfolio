import React from 'react';
import banane from '../assets/dev.jpg';
import '../App.css';
import dev2 from '../assets/dev2.jpg';

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
        <img className="img-fluid hero-img w-100" src={banane} alt="image développeur web" />
        
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center">
          <h1>Bonjour, je suis Yohann</h1>
          <h3>Développeur web fullstack</h3>
          <a href="#apropos" className="btn btn-danger mt-3">En savoir plus</a>
        </div>
      </section>

      {/* À propos + compétences */}
      <section id="apropos" className="container my-5">
        <div className="row shadow p-4 bg-white rounded">
          <div className="col-md-6">
            <h4>A propos</h4>
            <hr color='bg-primary'/>
            <img className="img-fluid hero-img w-100" src={dev2} alt="image développeur web" />
            <p>
              Bonjour, je suis Yohann, étudiant a Talis Buisness School a Perigueux. Je suis en formation DWMM, avant de commencer la formation j'ai appris les differents languages en autodidact. J'ameliorais mon Portfolio avec les compétences aquise durant la formation <br/>
              
            </p>
          </div>
          <div className="col-md-6">
            <h4>Mes compétences</h4>
            <hr/>
            {/*  Rendu dynamique des barres */}
            <ul className="list-unstyled">
              {competences.map(({ skill, level, color }, index) => (
                <li key={index} className="mb-3">
                  <span>{skill} {level}%</span>
                  <div className="progress">
                    <div
                      className={`progress-bar ${color}`}
                      role="progressbar"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
