import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <h1 className="mb-3">Welcome to SELA</h1>
      <p className="mb-4">
        SELA (Sedar Edge Learning App)
      At Sedar Edge, we believe that true learning begins when you take a moment to pause — to
think, to grow, and to transform.
SELA, developed by Sedar Edge Technologies (OPC) Pvt. Ltd., draws inspiration from the
Hebrew word Selah, a term used in the Psalms to signify a pause for reflection and
understanding. This timeless concept perfectly embodies the spirit of continuous learning —
taking a moment to reflect and move forward with clarity.
SELA (Sedar Edge Learning App) is more than just a Learning Management System or a mobile
app; it’s a platform built on values of wisdom, integrity, and excellence. Every course, every
interaction, and every step of your learning journey is designed to help you gain not just
knowledge, but understanding — the kind that shapes both skill and character.
Just as Selah invites reflection in the Psalms, SELA invites learners to reflect, engage deeply, and
rise stronger with purpose and insight. Whether you’re a beginner discovering new skills or a
professional advancing your career, SELA stands as your trusted companion in learning and
growth.
With SELA, we aim to redefine digital learning through a platform that blends technology with
thoughtful education. It’s not just an LMS — it’s a reflective learning experience designed for
growth.
Our mission is to empower learners and organizations to pause, reflect, and grow through
structured courses, assessments, and interactive learning journeys.

      </p>
      <Button href="/courses" variant="primary">Explore Courses</Button>
    </Container>
  );
};

export default Home;
