import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <Container className="mt-5">
      <div className="text-center mb-4">
        <h2>Contact</h2>
        <p>Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.</p>
        <div style={{ width: '100px', height: '3px', backgroundColor: '#007bff', margin: '0 auto' }}></div>
      </div>

      <Card className="shadow p-4">
        <Row>
          <Col md={6}>
            <h5 className="border-bottom border-primary pb-2 mb-4">Formulaire de contact</h5>
            <Form>
              <Form.Control className="mb-3" type="text" placeholder="Votre nom" />
              <Form.Control className="mb-3" type="email" placeholder="Votre adresse email" />
              <Form.Control className="mb-3" type="tel" placeholder="Votre numéro de téléphone" />
              <Form.Control className="mb-3" type="text" placeholder="Sujet" />
              <Form.Control className="mb-3" as="textarea" rows={4} placeholder="Votre message" />
              <Button variant="primary" type="submit">Envoyer</Button>
            </Form>
          </Col>

          <Col md={6}>
            <h5 className="border-bottom border-primary pb-2 mb-4">Mes coordonnées</h5>
            <address>
              <strong>John Doe</strong><br />
              📍 40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              ☎️ 10 20 30 40 50<br />
              ✉️ john.doe@gmail.com
            </address>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ContactPage;
