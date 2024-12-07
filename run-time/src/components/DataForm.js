import React, { useState } from 'react';
const DataForm = ({ addNewItem, updateItem, deleteItem }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !brand.trim() || !price.trim() || !image) {
      setError('All fields are required, including an image.');
      setSuccess(false);
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('brand', brand);
    formData.append('price', price);
    formData.append('image', image);
    try {
      const response = await fetch('https://part-9.onrender.com/api/gear', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        addNewItem(data.newItem);
        setName('');
        setBrand('');
        setPrice('');
        setImage(null);
      } else {
        setError(data.message || 'Failed to add the item.');
        setSuccess(false);
      }
    } catch (err) {
      setError('An error occurred while submitting the form.');
      setSuccess(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Brand</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Image</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Item added successfully!</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default DataForm;