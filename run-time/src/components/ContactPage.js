import React from 'react';
import sunsetImage from '../assets/images/sunset.jpg';
import logo from '../assets/images/logo.jpg'; 
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
     

      {/* IFrame Section */}
      <section className="iframe-section">
        <h2>Running Trail Parks</h2>
        <div className="iframe-container">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1tRsi8GQMxDDHC85IgrrIKres2GzCWW8" 
          frameBorder="0"
          allowFullScreen
          title="Google Map"
          style={{ width: "100%", height: "400px" }}
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

    </div>
  );
};

export default ContactPage;
