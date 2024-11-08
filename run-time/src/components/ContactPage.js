import React from 'react';
import sunsetImage from '../assets/images/sunset.jpg';
import logo from '../assets/images/logo.jpg'; // Import your logo image
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Nav Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Run Icon" width="40px" />
          <span>Run Time</span>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/gear">Gear & Equipment</a></li>
          <li><a href="/training">Training</a></li>
          <li><a href="/recovery">Recovery & Injury Prevention</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>    
      </nav>

      {/* IFrame Section */}
      <section className="iframe-section">
        <h2>Run Time Globally</h2>
        <div className="iframe-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18..."
            frameBorder="0"
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or suggestions, feel free to reach out to us!</p>
        <form 
          id="contactForm"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          {/* Web3Forms Access Key */}
          <input 
            type="hidden"
            name="access_key"
            value="5a0c4da9-d9be-4b8e-af21-551944659e1d"
          />
          <input type="hidden" name="redirect" value="false" />

          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
          <div id="formMessage" className="form-message" style={{ display: 'none' }}></div>
        </form>
      </section>

      {/* Contact Image Section */}
      <section className="contact-image">
        <img src={sunsetImage} alt="Running at sunset" />
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 Run Time. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;