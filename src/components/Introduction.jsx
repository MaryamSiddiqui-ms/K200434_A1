import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <h1>Maryam Siddiqui</h1>
        <p>Frontend Web Developer & UI/UX Designer</p>
      </div>
      <div className="intro-objective">
        <h2>Objective:</h2>
        <p>To create innovative and user-friendly digital experiences that inspire and delight.</p>
      </div>
      <div className="intro-skills">
        <h2>Skills:</h2>
        <ul>
          <li>Frontend Development: HTML, CSS, JavaScript, React</li>
          <li>UI/UX Design: User Research, Wireframing, Prototyping, Visual Design</li>
          <li>Design Tools: Sketch, Figma, Adobe XD</li>
          <li>Version Control: Git</li>
          <li>Cloud Tools: Azure</li>
        </ul>
      </div>
      <div className="intro-contact">
        <h2>Get in Touch:</h2>
        <p>
          <a href="mailto:maryam.siddiqui@email.com">maryam.siddiqui@email.com</a>
          <br />
          <a href="https://www.linkedin.com/in/maryamsiddiqui/">LinkedIn</a>
          <br />
          <a href="https://github.com/maryamsiddiqui">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;