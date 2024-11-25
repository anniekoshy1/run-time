import React from 'react';
import womenRunning from '../assets/images/womenrunning.jpg';
import legs from '../assets/images/legs.jpg';

const About = () => (
  <section className="about-section">
    <h2>About Run Time</h2>
    <p>
      At Run Time, we are passionate about running and dedicated to helping runners of all levels achieve their best. Whether you're a beginner runner or a professional athlete, our platform is designed to provide the essential tools and knowledge you need to succeed. With expert advice on training, insights on gear and equipment, and tips for recovery and injury prevention, we are your go-to resource for everything running-related. Our mission is to inspire and empower runners to reach their goals, one step at a time.
    </p>
    <div className="images-container">
      <img src={womenRunning} alt="Women running" />
      <img src={legs} alt="Running legs" />
    </div>
  </section>
);

export default About;