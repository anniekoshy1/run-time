import React from 'react';
import './Home.css';
import runningWoman from '../assets/images/womenrunning.jpg';
import runningLegs from '../assets/images/legs.jpg';

const Home = () => {
  return (
    <div>
      {/* Main Header Section */}
      <header className="main-section">
        <div className="header-content">
          <h1>Welcome to Run Time</h1>
          <p>Your source for everything running-related!</p>
        </div>
      </header>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Run Time</h2>
        <p>
          At Run Time, we are passionate about running and dedicated to helping runners of all levels achieve their best.
          Whether you're a beginner runner or a professional athlete, our platform is designed to provide the essential tools
          and knowledge you need to succeed. With expert advice on training, insights on gear and equipment, and tips for
          recovery and injury prevention, we are your go-to resource for everything running-related. Our mission is to inspire
          and empower runners to reach their goals, one step at a time.
        </p>
      </section>

      {/* Goals Section */}
      <section className="goals-section">
        <div className="goals-container">
          <div className="goal-image">
            <img src={runningWoman} alt="Running woman" />
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
            <img src={runningLegs} alt="Running legs close-up" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;