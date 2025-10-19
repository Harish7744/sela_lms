import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>&copy; 2025 SELA LMS</p>
          </Col>
          <Col>
            <p>Follow us on:</p>
            {/* Add social media links */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
