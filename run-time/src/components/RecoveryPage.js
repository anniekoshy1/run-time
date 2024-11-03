import React from 'react';
import foamImage from '../assets/images/foam.jpg';
import stretchImage from '../assets/images/stretch.jpg';
import './RecoveryPage.css';

const RecoveryPage = () => {
  return (
    <div className="recovery-page">
      {/* Recovery Section */}
      <section className="recovery-section">
        <div className="recovery-content">
          <div className="recovery-text">
            <h2>Recovery Methods</h2>
            <p>
              Recovery after a run is crucial for improving performance and preventing injury. Simple practices like
              stretching and foam rolling can help release muscle tension and improve flexibility. Hydrating and
              replenishing electrolytes are essential for replacing what’s lost during your run, while consuming a
              balanced post-run meal with protein and carbs aids in muscle repair. Many runners also benefit from
              incorporating rest days, using ice baths or compression gear to reduce inflammation, and prioritizing
              sleep for optimal recovery. Listening to your body and giving it the proper time to heal ensures you're
              ready for your next run and can help you maintain long-term running success.
            </p>
          </div>
          <div className="recovery-image">
            <img src={foamImage} alt="Foam Roller" />
          </div>
        </div>
      </section>

      {/* Injury Prevention Section */}
      <section className="injury-prevention-section">
        <div className="prevention-content">
          <div className="prevention-text">
            <h2>Injury Prevention Techniques</h2>
            <p>
              Preventing injuries while running starts with proper preparation and mindful training. One of the most
              important techniques is building your mileage gradually to avoid overloading your body—never increasing
              your weekly distance by more than 10%. Warming up before a run with dynamic stretches or light jogging
              helps loosen your muscles and prepare them for the demands of running. Wearing the right shoes for your
              foot type and running style is crucial to support proper biomechanics and reduce strain on your joints.
              Additionally, incorporating strength training exercises that target your core, hips, and legs can improve
              your overall stability and running form, further lowering the risk of injuries like shin splints, IT band
              syndrome, or runner’s knee. By listening to your body, staying consistent with recovery, and maintaining
              good form, you can run injury-free and enjoy the sport for years to come.
            </p>
          </div>
          <div className="prevention-image">
            <img src={stretchImage} alt="Stretching" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecoveryPage;