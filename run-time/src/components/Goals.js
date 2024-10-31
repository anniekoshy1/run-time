import React from 'react';
import './Goals.css'; // Optional: Separate CSS for Goals styles
import runningImage1 from '../assets/images/womenrunning.jpg';
import runningImage2 from '../assets/images/legs.jpg';

const Goals = () => {
  return (
    <section className="goals-section">
      <div className="goals-container">
        <div className="goal-image">
          <img src={runningImage1} alt="Running" />
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
          <img src={runningImage2} alt="Running woman" />
        </div>
      </div>
    </section>
  );
};

export default Goals;