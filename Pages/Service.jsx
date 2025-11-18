import { Container, Row, Col, Card } from 'react-bootstrap';
import courbe from '../src/assets/courbe.jpg';
import code from '../src/assets/code.png'
import pinceau from '../src/assets/pinceau.png'; 
import loupe from '../src/assets/loupe.png';

export default function AccueilImage() {
  return (
    <div>
      {/* Image en pleine largeur avec titre centré */}
      <div>
        <img className="img-fluid hero-img w-100" src={courbe} alt="image développeur web" />
        
        <div style={{marginTop: '100px', textAlign: 'center'}}>
          <h1>Mes competences acquise ou en cours d'acquisition</h1>
          <p >Voici les prestations sur lesquelles je peux intervenir </p>
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
                <Card.Title className='text-center'>UX Design</Card.Title>
                <Card.Text><p>Je sais me servir de figma, j'ai deja fais plusieur maquette, pour la formation ou pour des projets perso</p></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              
              <Card.Body className="d-flex flex-column text-center">
                <img
                src={code}
                alt="UX Design"
                style={{ width: '60px', marginBottom: '1rem' }}
                className="d-block mx-auto"
                />

                <Card.Title className='text-center'>Développement web</Card.Title>
                <Card.Text><p>Jusqu'a maintenant j'ai appris HTML 5, CSS 3, Tailwind, JavaScript</p></Card.Text>
              </Card.Body >
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              
              <Card.Body className="d-flex flex-column text-center">
                 <img
                src={loupe}
                alt="UX Design"
                style={{ width: '60px', marginBottom: '1rem' }}
                className="d-block mx-auto"
                />
                <Card.Title className='text-center'>Référencement</Card.Title>
                <Card.Text><p>Le Référencement naturel (SEO) est une technique qui consiste a optimiser un site web pour le faire remonter dans les resultats des moteurs de recherche 
                    (Google, Bing, Yahoo, etc). L'objectif est d'attirer un macimum de visiteur qualifiés sur le site.</p></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
