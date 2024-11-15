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

    try {
      const response = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, brand, price }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        addNewItem(data.newItem); // Add new item to the state
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
    <form onSubmit={handleSubmit} className="form-container">
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