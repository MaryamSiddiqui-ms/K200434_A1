import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Certification from "./pages/Certification"


function App() {
  return (
    <>
      <Router>
        <Navbar activeLink="home" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certification" element={<Certification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
