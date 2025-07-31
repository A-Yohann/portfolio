import React from 'react';
import banane from '../assets/dev.jpg';
import '../App.css';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="hero-section position-relative text-white">
        <img className="img-fluid hero-img" src={banane} alt="image développeur web" />
        
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center">
          <h1>Bonjour, je suis John Doe</h1>
          <h3>Développeur web fullstack</h3>
          <a href="#apropos" className="btn btn-danger mt-3">En savoir plus</a>
        </div>
      </section>

      {/* À propos + compétences */}
      <section id="apropos" className="container my-5">
        <div className="row shadow p-4 bg-white rounded">
          <div className="col-md-6">
            <h4>A propos</h4>
            <img src="https://via.placeholder.com/400x200" alt="dev" className="img-fluid rounded mb-3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus. <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus.
            </p>
          </div>
          <div className="col-md-6">
            <h4>Mes compétences</h4>
            <ul className="list-unstyled">
              {[
                { skill: "HTML5", level: 90 },
                { skill: "CSS3", level: 80 },
                { skill: "JAVASCRIPT", level: 70 },
                { skill: "PHP", level: 60 },
                { skill: "REACT", level: 50 }
              ].map(({ skill, level }, i) => (
                <li key={i} className="mb-3">
                  <span>{skill} {level}%</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: `${level}%` }}
                      role="progressbar"
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
