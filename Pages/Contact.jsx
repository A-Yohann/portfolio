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
              <strong>Yohann</strong><br />
              📍 1644 Route de Marsal<br />
              24130 La force, France<br />
              ☎️ 06.31.28.44.64<br />
              ✉️ at.yohann@gmail.com
            </address>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45256.11184852758!2d0.44708453824493083!3d44.851972642898836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aad07c6048f55f%3A0xd23474adfc552221!2s24100%20Bergerac!5e0!3m2!1sfr!2sfr!4v1763478909545!5m2!1sfr!2sfr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Card>
    </Container>
    
  );
};

export default ContactPage;
