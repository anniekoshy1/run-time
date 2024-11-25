import React, { useState } from 'react';

const DataForm = ({ addNewItem }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !brand || !price) {
      setError('All fields are required');
      setSuccess(false);
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      setError('Price must be a valid number');
      setSuccess(false);
      return;
    }

    setError(null);

    try {
      const response = await fetch('https://part-9.onrender.com/api/gear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, brand, price: priceNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        addNewItem(data.newItem);
        setName('');
        setBrand('');
        setPrice('');
      } else {
        setError('Failed to add the item');
        setSuccess(false);
      }
    } catch (err) {
      setError('An error occurred while submitting the form');
      setSuccess(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Recommended Gear & Equipment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Add Item</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Item added successfully!</p>}
    </div>
  );
};

export default DataForm;