import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function CourseCategories() {
  return (
    <div id="courses" className="section-light text-center">
      <h2 className="mb-5">Course Categories</h2>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Biblical Studies</Card.Title>
              <Card.Text>Deep dive into biblical texts and teachings.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Leadership Development</Card.Title>
              <Card.Text>Empower yourself with leadership skills.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Community Engagement</Card.Title>
              <Card.Text>Learn how to serve and lead communities.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CourseCategories;
