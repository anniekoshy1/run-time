import React, { useState } from 'react';

const DataForm = ({ addNewItem }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!name || !brand || !price) {
      setError('All fields are required');
      return;
    }

    const priceNumber = parseFloat(price); 
    if (isNaN(priceNumber)) {
      setError('Price must be a valid number');
      return;
    }

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
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit" className="add-item-button">Add Item</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Item added successfully!</p>}
    </form>
  );
};

export default DataForm;