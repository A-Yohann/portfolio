import React from 'react';
import banane from '../assets/dev.jpg';
import dev2 from '../assets/dev2.jpg';
import '../App.css';

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="position-relative text-white" style={{ height: '100vh', overflow: 'hidden' }}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={banane}
          alt="Image développeur web"
        />

        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,26,46,0.85) 0%, rgba(26,26,46,0.95) 100%)',
        }} />

        <div className="position-absolute top-50 start-50 translate-middle text-center w-100 px-4">
          <p style={{ letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase', color: '#00D4FF', marginBottom: '1rem' }}>
            Développeur web fullstack
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Bonjour, je suis <span style={{ color: '#00D4FF' }}>Yohann</span>
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#fff',
            maxWidth: '500px',
            margin: '0 auto 2rem',
          }}>
            Je conçois et développe des applications web modernes, du design à la mise en production.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            
              <a href="#apropos"
              style={{
                padding: '0.6rem 1.5rem',
                border: '1px solid #00D4FF',
                color: '#fff',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                background: '#1a1a2e',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#00D4FF';
                e.currentTarget.style.color = '#1a1a2e';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#1a1a2e';
                e.currentTarget.style.color = '#fff';
              }}
            >
              En savoir plus
            </a>
            <a
              href="https://a-yohann.github.io/C.V-yohann/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.6rem 1.5rem',
                border: '1px solid #00D4FF',
                color: '#00D4FF',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                background: 'transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#00D4FF';
                e.currentTarget.style.color = '#1a1a2e';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00D4FF';
              }}
            >
              Consulter le CV
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-4 text-center">
          <div style={{ color: '#00D4FF', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Scroll</div>
          <div style={{ width: '1px', height: '40px', background: '#00D4FF', margin: '0 auto' }}></div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="container my-5 py-3">
        <div className="row align-items-center g-5">

          <div className="col-md-6">
            <div style={{ position: 'relative' }}>
              <img
                className="img-fluid rounded"
                src={dev2}
                alt="Image développeur web"
                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                background: '#1a1a2e', color: '#00D4FF',
                padding: '1.2rem 1.5rem', borderRadius: '8px',
                fontWeight: '700', fontSize: '1rem', lineHeight: '1.3',
                boxShadow: '0 4px 20px rgba(0,212,255,0.2)',
                border: '1px solid #00D4FF'
              }}>
                Disponible<br />
                <span style={{ fontWeight: '400', fontSize: '0.85rem', color: '#e0e0e0' }}>pour alternance</span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <p style={{ color: '#00D4FF', letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>À propos</p>
            <h2 style={{ fontWeight: '700', marginBottom: '1.25rem' }}>Étudiant en développement web à Périgueux</h2>
            <p style={{ color: '#6c757d', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Formé à Talis Business School en DWWM, j'ai commencé à coder en autodidacte avant ma formation.
              Je développe des applications web complètes en privilégiant la qualité du code et l'expérience utilisateur.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <p className="skills__category">Back-end</p>
                <div className="skills__badges">
                  {["PHP", "Symfony"].map(tech => (
                    <span key={tech} className="skills__badge skills__badge--blue">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skills__category">Front-end</p>
                <div className="skills__badges">
                  {["HTML", "CSS", "SCSS", "JavaScript", "React"].map(tech => (
                    <span key={tech} className="skills__badge skills__badge--purple">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="skills__category">Outils</p>
                <div className="skills__badges">
                  {["Git", "GitHub", "Figma", "o2switch"].map(tech => (
                    <span key={tech} className="skills__badge skills__badge--green">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences icônes */}
      <section style={{ background: '#f8f9fa', padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ color: '#00D4FF', letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Technologies</p>
            <h2 style={{ fontWeight: '700' }}>Mon stack technique</h2>
          </div>
          <div className="skills-bounce-container d-flex flex-wrap gap-4 justify-content-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-bounce" alt="HTML5" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-bounce" alt="CSS3" style={{ width: '100px' }} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skill-bounce" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-bounce" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="skill-bounce" alt="PHP" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" className="skill-bounce" alt="Symfony" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="skill-bounce" alt="SCSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="skill-bounce" alt="Tailwind CSS" />
          </div>
        </div>
      </section>
    </>
  );
}