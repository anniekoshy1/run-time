import React, { useState, useEffect } from 'react';
import './GearPage.css';
import clothingData from '../data/clothing.json';
import foamRollersData from '../data/foam_rollers.json';
import lacrosseBallsData from '../data/lacrosse_balls.json';
import shoesData from '../data/shoes.json';
import sunglassesData from '../data/sunglasses.json';
import vestsData from '../data/vests.json';
import watchesData from '../data/watches.json';
import waterBottlesData from '../data/waterbottles.json';
import shoeImage from '../assets/images/shoe.jpg';
import vestImage from '../assets/images/vest.jpg';
import watchImage from '../assets/images/watch.jpg';
import foamImage from '../assets/images/foam.jpg';
import bottleImage from '../assets/images/bottle.jpg';
import glassesImage from '../assets/images/glasses.jpg';
import runningVestImage from '../assets/images/runningvest.jpg';
import ballImage from '../assets/images/ball.jpg';

const GearPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (category) => {
    // Load data based on category
    let data = [];
    switch (category) {
      case "Sneakers":
        data = shoesData;
        break;
      case "Clothing":
        data = clothingData;
        break;
      case "Watches":
        data = watchesData;
        break;
      case "Foam Rollers":
        data = foamRollersData;
        break;
      case "Water Bottles":
        data = waterBottlesData;
        break;
      case "Sunglasses":
        data = sunglassesData;
        break;
      case "Vests":
        data = vestsData;
        break;
      case "Lacrosse Balls":
        data = lacrosseBallsData;
        break;
      default:
        data = [];
    }
    setSelectedItems(data);
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="gear-page">
      <section className="gear-section">
        <h2>Recommended Gear & Equipment</h2>

        {/* Static Display of Gear Items */}
        <div className="gear-container">
          <div className="gear-item" onClick={() => handleClick("Sneakers")}>
            <img src={shoeImage} alt="Running Shoes" />
            <h3>Sneakers</h3>
            <p>When it comes to running, the right pair of shoes can make all the difference. Whether you're just starting out or logging miles as an experienced runner, investing in quality running shoes is essential for comfort, performance, and injury prevention. Different runners have different needs, so it's important to consider factors like cushioning, stability, and fit when choosing your shoes. From lightweight sneakers built for speed to more supportive options designed for long-distance comfort, finding the right pair will help you run your best while keeping your feet healthy. Remember, your shoes are your most important gear—take the time to choose wisely!</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Clothing")}>
            <img src={vestImage} alt="Clothing" />
            <h3>Clothing</h3>
            <p>Choosing the right clothing for your run is just as important as picking the right shoes, especially when it comes to staying comfortable in different temperatures. Lightweight fabrics are key in hot weather, helping to keep sweat at bay and prevent overheating. On colder days, layering is essential—start with a base layer to keep your skin dry, followed by an insulating layer, and top it off with a weatherproof jacket if it's windy or wet. The right gear can regulate your body temperature, keeping you cool in the heat and warm in the cold, so you can focus on the run, no matter the conditions.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Watches")}>
            <img src={watchImage} alt="Watches" />
            <h3>Watches</h3>
            <p>Tracking your runs with a reliable watch can take your training to the next level. GPS running watches provide real-time data on distance, pace, and elevation, giving you a clear picture of your performance on every run. Advanced models also monitor your heart rate, recovery time, and even offer personalized training plans based on your fitness goals. Whether you're aiming to improve your speed, increase your mileage, or simply keep track of your progress, a good running watch can help you stay on track and motivated. It’s a powerful tool for runners of all levels, offering valuable insights to enhance your training and reach your goals.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Foam Rollers")}>
            <img src={foamImage} alt="Foam Rollers" />
            <h3>Foam Rollers</h3>
            <p>Foam rollers are a must-have tool for runners looking to enhance recovery and reduce muscle soreness. By using a foam roller to massage tight muscles after a run, you can improve circulation, release tension, and increase flexibility. Regular foam rolling helps break up knots and promote faster recovery, making it easier to stay injury-free. Whether you're dealing with sore calves or tight quads, a foam roller provides an effective, deep tissue massage that aids in muscle repair and prepares your body for the next run.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Water Bottles")}>
            <img src={bottleImage} alt="Water Bottles" />
            <h3>Water Bottles</h3>
            <p>A reusable water bottle is an essential piece of gear for runners, helping to maintain proper hydration during training and races. Staying hydrated is crucial for performance and recovery, and a lightweight, easy-to-carry water bottle ensures you can drink as needed. Beyond its practical use, reusable bottles are also eco-friendly, reducing plastic waste by eliminating the need for single-use bottles. Durable and convenient, they are a sustainable choice that supports both your running routine and the environment.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Sunglasses")}>
            <img src={glassesImage} alt="Sunglasses" />
            <h3>Sunglasses</h3>
            <p>Running sunglasses are an essential accessory for bright, sunny runs, providing both eye protection and enhanced visibility. They shield your eyes from harmful UV rays and reduce glare, making it easier to see on clear, sunny days. Many running sunglasses are designed with lightweight frames and anti-fog lenses, ensuring they stay comfortable and clear during long runs. Whether you're running on a bright morning or during midday sun, a quality pair of sunglasses can help you stay focused and protect your eyes from strain.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Vests")}>
            <img src={runningVestImage} alt="Vests" />
            <h3>Vests</h3>
            <p>Vests are essential gear for runners facing colder weather. Designed to keep your core warm while allowing full arm mobility, a lightweight running vest can help regulate your body temperature during chilly runs without the bulk of a full jacket. Many vests are wind-resistant and breathable, providing just the right amount of warmth while wicking away sweat to keep you dry. Whether you're running in early morning frost or brisk evening air, a vest is a versatile option to stay comfortable and focused on your training.</p>
          </div>

          <div className="gear-item" onClick={() => handleClick("Lacrosse Balls")}>
            <img src={ballImage} alt="Lacrosse Ball" />
            <h3>Lacrosse Balls</h3>
            <p>Lacrosse balls can be a valuable tool for runners, especially for post-run recovery. These firm, durable balls are perfect for targeting deep muscle tissue, helping to relieve tension and knots. By rolling a lacrosse ball over sore areas, such as your calves or glutes, you can release muscle tightness and improve flexibility. Regular use can enhance muscle recovery, reduce the risk of injury, and help you stay active and pain-free. Whether for recovery or injury prevention, lacrosse balls are an important addition to your gear.</p>
          </div>
        </div>

        {/* Modal for JSON Data */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>Close</button>
              {selectedItems.map((item) => (
                <div className="json-data-card" key={item._id}>
                  <img src={item.img_name} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Brand: {item.brand}</p>
                  <p>Price: {item.price}</p>
                  <p>Rating: {item.rating}</p>
                  <ul>
                    {item.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default GearPage;