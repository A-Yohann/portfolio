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
              <strong>John Doe</strong><br />
              📁 40 rue Laure Diebold<br />
              📍 69009 Lyon, France<br />
              📞 10 20 30 40 50<br />
              📧 john.doe@gmail.com
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
              Ce site à été réaliser par moi meme dans un but pédagogique afin d'approfondir mes competences apprise par moi meme avant de me lancer dans une formation adapté 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
});
