import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "UX Design",
    tools: "Figma · FigJam",
    desc: "Conception de zoning, wireframes et maquettes haute-fidélité. Création de composants réutilisables et de prototypes interactifs pour valider les parcours utilisateurs.",
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Développement web",
    tools: "HTML · CSS · Tailwind · SCSS · PHP · Symfony · React",
    desc: "Intégration pixel-perfect et développement d'applications full-stack. Du composant React au back-end Symfony, avec des pratiques propres et maintenables.",
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: "Référencement (SEO)",
    tools: "Google Search Console · Semrush",
    desc: "Optimisation on-page, structure sémantique HTML, balises meta et vitesse de chargement pour améliorer le positionnement sur Google.",
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Gestion de projet",
    tools: "Notion · Trello · Méthode Agile",
    desc: "Organisation des sprints, suivi des tâches et communication en équipe. Capacité à cadrer un projet de la conception à la livraison.",
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
        <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9"/><line x1="12" y1="12" x2="12" y2="15"/>
      </svg>
    ),
    title: "Versioning & Collaboration",
    tools: "Git · GitHub",
    desc: "Gestion de versions, branches et pull requests pour travailler en équipe de façon organisée. Suivi de l'historique du code et collaboration sur des projets partagés.",
  },
  {
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#6ea8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Déploiement & Hébergement",
    tools: "o2switch · phpMyAdmin",
    desc: "Mise en ligne de projets sur serveur mutualisé, gestion des bases de données MySQL via phpMyAdmin et configuration des environnements de production.",
  },
];

export default function AccueilImage() {
  return (
    <div>
      <div style={{ marginTop: '100px', textAlign: 'center' }} className="mb-5">
        <h1 className="mb-2">Mes compétences acquises ou en cours d'acquisition</h1>
        <div className="portfolio-divider mx-auto mb-3"></div>
        <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir.</p>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          {skills.map((skill, i) => (
            <Col key={i} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column text-center">
                  <div className="d-flex justify-content-center mb-3">
                    {skill.icon}
                  </div>
                  <Card.Title>{skill.title}</Card.Title>
                  <p className="text-primary small fw-semibold mb-2">{skill.tools}</p>
                  <Card.Text>{skill.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}