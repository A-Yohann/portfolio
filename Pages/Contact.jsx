import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../src/App.css';

const ContactPage = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: new FormData(form),
      });
      const result = await response.text();
      setStatus(result === 'success' ? 'success' : 'error');
      if (result === 'success') form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <Container className="my-5">

      <div className="text-center mb-5">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__subtitle">Pour me contacter en vue d'un entretien ou d'une future collaboration.</p>
        <div className="portfolio-divider mx-auto"></div>
      </div>

      <Row className="g-4">

        <Col md={6}>
          <div className="contact__card">
            <p className="contact__card-title">Formulaire de contact</p>

            {status === 'success' && (
              <div style={{ color: 'green', marginBottom: '1rem' }}>
                ✅ Message envoyé ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}
            {status === 'error' && (
              <div style={{ color: 'red', marginBottom: '1rem' }}>
                ❌ Une erreur est survenue. Veuillez réessayer.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input className="contact__field" type="text" name="nom" placeholder="Votre nom" required />
              <input className="contact__field" type="email" name="email" placeholder="Votre adresse e-mail" required />
              <input className="contact__field" type="tel" name="telephone" placeholder="Votre numéro de téléphone" />
              <input className="contact__field" type="text" name="sujet" placeholder="Sujet" required />
              <textarea className="contact__field" name="message" rows={4} placeholder="Votre message" required></textarea>

              <div className="d-flex align-items-start gap-2 mb-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="terms" style={{ fontSize: '0.875rem', color: '#6c757d', cursor: 'pointer' }}>
                    J'accepte que mes données soient utilisées conformément aux{' '}
                    <a href="/mention" style={{ color: '#1a1a2e', fontWeight: '500' }}>mentions légales</a>.
                </label>
              </div>

              <button className="contact__btn" type="submit">Envoyer</button>
            </form>
          </div>
        </Col>

        <Col md={6}>
          <div className="contact__card">
            <p className="contact__card-title">Mes coordonnées</p>

            <div className="contact__coord">
              <span className="contact__coord-label">Adresse</span>
              <span className="contact__coord-value">16444 Route de Marsal<br />24130 La Force, France</span>
            </div>
            <hr className="contact__sep" />

            <div className="contact__coord">
              <span className="contact__coord-label">Téléphone</span>
              <span className="contact__coord-value">06.31.28.44.64</span>
            </div>
            <hr className="contact__sep" />

            <div className="contact__coord">
              <span className="contact__coord-label">E-mail</span>
              <span className="contact__coord-value">contact@yohanndufresne.fr</span>
            </div>
            <hr className="contact__sep" />

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45256.11184852758!2d0.44708453824493083!3d44.851972642898836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aad07c6048f55f%3A0xd23474adfc552221!2s24100%20Bergerac!5e0!3m2!1sfr!2sfr!4v1763478909545!5m2!1sfr!2sfr"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
            />
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default ContactPage;