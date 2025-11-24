import React, { memo } from 'react';
import { Accordion, Container } from 'react-bootstrap';

export default memo(function Mentionlegales() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Container style={{ maxWidth: '700px' }}>
        <h1 className="text-center mb-5">Mentions légales</h1>
        
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <strong>Yohann</strong><br />
              📁 1644 Route de Marsal<br />
              📍 24130 La Force, France<br />
              📞 06.31.28.44.64<br />
              📧 at.yohann@gmail.com
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              Informations sur l’hébergeur à ajouter ici.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              Ce site a été réalisé par moi-même dans un but pédagogique afin d'approfondir mes compétences acquises en autodidacte avant de me lancer dans une formation adaptée.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
});
