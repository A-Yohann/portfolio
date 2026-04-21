import React, { memo } from 'react';
import { Accordion, Container } from 'react-bootstrap';

export default memo(function Mentionlegales() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-5">
      <Container style={{ maxWidth: '700px' }}>
        <h1 className="text-center mb-2">Mentions légales</h1>
        <p className="text-center text-muted mb-5" style={{ fontSize: '0.9rem' }}>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004.
        </p>

        <Accordion defaultActiveKey="0">

          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <strong>Yohann Dufresne</strong><br />
              📁 16444 Route de Marsal<br />
              📍 24130 La Force, France<br />
              📞 06.31.28.44.64<br />
              📧 at.yohann@gmail.com<br /><br />
              Ce site est un portfolio personnel réalisé dans un but pédagogique.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <strong>o2switch</strong><br />
              📍 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France<br />
              🌐 <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer">www.o2switch.fr</a><br />
              📞 04 44 44 60 40
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Propriété intellectuelle</Accordion.Header>
            <Accordion.Body>
              L'ensemble du contenu de ce site (textes, images, code) est la propriété exclusive de Yohann Dufresne,
              sauf mentions contraires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Données personnelles (RGPD)</Accordion.Header>
            <Accordion.Body>
              <strong>Responsable du traitement :</strong> Yohann Dufresne<br /><br />
              <strong>Données collectées :</strong><br />
              Dans le cadre du formulaire de contact, les données suivantes sont collectées :
              nom, adresse e-mail, numéro de téléphone (facultatif), sujet et message.<br /><br />
              <strong>Finalité :</strong><br />
              Ces données sont utilisées uniquement pour répondre à vos demandes de contact.
              Elles ne sont ni revendues, ni transmises à des tiers.<br /><br />
              <strong>Durée de conservation :</strong><br />
              Les données sont conservées le temps nécessaire au traitement de votre demande.<br /><br />
              <strong>Vos droits :</strong><br />
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
              de vos données. Pour exercer ces droits, contactez : <a href="mailto:contact@yohanndufresne.fr">contact@yohanndufresne.fr</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Cookies</Accordion.Header>
            <Accordion.Body>
              Ce site n'utilise pas de cookies à des fins publicitaires ou de tracking.
              Aucune donnée de navigation n'est collectée sans votre consentement.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              Ce site a été entièrement conçu et développé par Yohann Dufresne dans un but pédagogique,
              afin d'approfondir les compétences acquises en autodidacte et durant la formation DWWM
              à Talis Business School, Périgueux.<br /><br />
              Technologies utilisées : React, Bootstrap, PHP, Symfony, HTML, CSS, SCSS.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <p className="text-center text-muted mt-5" style={{ fontSize: '0.8rem' }}>
          Dernière mise à jour : avril 2026
        </p>
      </Container>
    </div>
  );
});