import React from 'react';
import './GearList.css'; // Optional: Separate CSS for GearList styles

const GearList = ({ data }) => {
  return (
    <div className="gear-container">
      {data.map((item) => (
        <div className="gear-card" key={item._id}>
          <img src={item.img_name} alt={item.name} className="gear-image" />
          <div className="gear-details">
            <h3>{item.name}</h3>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Rating:</strong> {item.rating}</p>
            <ul>
              {item.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GearList;