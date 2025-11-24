import { Container, Row, Col, Card } from 'react-bootstrap';
import courbe from '../src/assets/courbe.jpg';
import code from '../src/assets/code.png';
import pinceau from '../src/assets/pinceau.png'; 
import loupe from '../src/assets/loupe.png';

export default function AccueilImage() {
  return (
    <div>
      {/* Image en pleine largeur avec titre centré */}
      <div>
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <h1>Mes compétences acquises ou en cours d'acquisition</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        </div>
      </div>

      {/* Section des cartes */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column text-center">
                <img
                  src={pinceau}
                  alt="UX Design"
                  style={{ width: '60px', marginBottom: '1rem' }}
                  className="d-block mx-auto"
                />
                <Card.Title className="text-center">UX Design</Card.Title>
                <Card.Text>
                  <p>
                    Je sais me servir de Figma. J'ai déjà réalisé plusieurs maquettes pour la formation ou pour des projets personnels.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column text-center">
                <img
                  src={code}
                  alt="Développement web"
                  style={{ width: '60px', marginBottom: '1rem' }}
                  className="d-block mx-auto"
                />
                <Card.Title className="text-center">Développement web</Card.Title>
                <Card.Text>
                  <p>
                    Jusqu'à maintenant, j'ai appris HTML5, CSS3, Tailwind et JavaScript.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column text-center">
                <img
                  src={loupe}
                  alt="Référencement"
                  style={{ width: '60px', marginBottom: '1rem' }}
                  className="d-block mx-auto"
                />
                <Card.Title className="text-center">Référencement</Card.Title>
                <Card.Text>
                  <p>
                    Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
