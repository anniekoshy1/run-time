import React from 'react';
import sunsetImage from '../assets/images/sunset.jpg';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or suggestions, feel free to reach out to us!</p>
        <form>
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