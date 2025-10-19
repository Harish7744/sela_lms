import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Hero() {
  return (
    <div
      className="hero-banner d-flex align-items-center text-center"
      style={{
        height: '500px',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/hero.jpg") center/cover no-repeat',
        color: 'white',
      }}
    >
      <Container>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>SELA</h1>
        <h2 className="display-4 mb-3">Welcome to SELA</h2>
        <p className="lead mb-4">Pause. Reflect. Learn.</p>
        <Button variant="success" size="lg" href="#courses">Explore Courses</Button>
      </Container>
    </div>
  );
}

export default Hero;
