// src/components/Goals.js
import React from 'react';
import image1 from '../assets/images/womenrunning.jpg';
import image2 from '../assets/images/legs.jpg';

const Goals = () => (
  <section className="goals-section">
    <div className="goals-container">
      <div className="goal-image">
        <img src={image1} alt="Running Image 1" />
      </div>
      <div className="goals-content">
        <h2>Our Goals</h2>
        <ul>
          <li><strong>Promote Healthy Running Habits:</strong> Provide expert tips and resources to help runners develop safe and effective training routines that enhance performance and reduce the risk of injury.</li>
          <li><strong>Support Runner Recovery:</strong> Educate runners on recovery techniques and injury prevention strategies to ensure they stay healthy and continue progressing on their fitness journey.</li>
          <li><strong>Empower runners to achieve personal bests.</strong></li>
          <li><strong>Create a source of learning.</strong></li>
        </ul>
      </div>
      <div className="goal-image">
        <img src={image2} alt="Running Image 2" />
      </div>
    </div>
  </section>
);

export default Goals;