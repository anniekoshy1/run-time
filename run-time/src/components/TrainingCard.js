import React from 'react';
import './TrainingCard.css';

const TrainingCard = ({ week, image, description }) => (
  <div className="training-card">
    <h3>{week}</h3>
    <img src={image} alt={`${week} training`} />
    <p>{description}</p>
  </div>
);

export default TrainingCard;