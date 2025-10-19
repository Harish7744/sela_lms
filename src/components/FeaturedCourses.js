import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function FeaturedCourses() {
  return (
    <div className="section-dark text-center">
      <h2 className="mb-5">Featured Courses</h2>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Biblical Leadership</Card.Title>
              <Card.Text>Instructor: John Doe</Card.Text>
              <Card.Text>Learn how to lead with faith and integrity.</Card.Text>
              <Button variant="success">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Community Service</Card.Title>
              <Card.Text>Instructor: Jane Smith</Card.Text>
              <Card.Text>Practical ways to serve your community effectively.</Card.Text>
              <Button variant="success">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Biblical Studies</Card.Title>
              <Card.Text>Instructor: Mark Lee</Card.Text>
              <Card.Text>Explore biblical texts and their modern applications.</Card.Text>
              <Button variant="success">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FeaturedCourses;
