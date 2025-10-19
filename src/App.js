import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCategories from './components/CourseCategories';
import FeaturedCourses from './components/FeaturedCourses';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Container>
        <CourseCategories />
        <FeaturedCourses />
        <About />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
