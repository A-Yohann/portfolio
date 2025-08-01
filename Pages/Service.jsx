import { Container, Row, Col, Card } from 'react-bootstrap';
import courbe from '../src/assets/courbe.jpg';


export default function AccueilImage() {
  return (
    <div>
      {/* Image en pleine largeur avec titre centré */}
      <div>
        <img className="img-fluid hero-img w-100" src={courbe} alt="image développeur web" />
        
        <div style={{marginTop: '100px', textAlign: 'center'}}>
          <h1>Mon offre de services</h1>
          <p >Voici les prestations sur lesquelles je peux intervenir </p>
        </div>
      </div>

      {/* Section des cartes */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card>
              
              <Card.Body>
               
                <Card.Title className='text-center'>UX Design</Card.Title>
                <Card.Text><p>L'UX Design est une discipline qui consiste à concevoir des produits(sites web,applications mobiles,logiciels,objets connectés etc)
                    en plaçant l'utilisateur au centre des préoccupations. L'objecctif est de rendre l'experience utilisateur ma plus fluide et agréable possible.</p></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              
              <Card.Body>
                <Card.Title className='text-center'>Développement web</Card.Title>
                <Card.Text><p>Le développement du sites web consiste ç créer des sites internet en utilisant des langages de programmation
                    (HTML, CSS, JavaScipt, PHP, etc) et des frameworks (Bootstrap, React, Angular, etc)</p></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              
              <Card.Body>
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
