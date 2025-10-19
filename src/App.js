import React from "react";
import { Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<><Hero /><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
