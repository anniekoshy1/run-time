import React from 'react';

const GearItem = ({ name, img_name, brand, price, rating, features }) => {
  return (
    <div className="gear-item">
      <img src={img_name} alt={name} className="gear-image" />
      <h3>{name}</h3>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default GearItem;