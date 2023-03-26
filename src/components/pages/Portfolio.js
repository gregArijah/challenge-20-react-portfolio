import React from 'react';
import '../../css/Portfolio.css';
import cardData from '../../utils/cardData.js';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Portfolio() {
  return (
    <Container>
      <h2 className="text-center my-5">Portfolio</h2>
      <Row className="justify-content-center">
        {cardData.map((card) => (
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img src={card.image} alt="project image" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <a href={card.app}>View deployed application</a><br/>
                <a href={card.repo}>View GitHub repository</a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
  