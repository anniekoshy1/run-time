import React, { useState } from 'react';
const DataForm = ({ addNewItem, updateItem, deleteItem }) => {
    // State variables for form inputs and feedback messages
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    // Function to handle image file selection
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Validate input fields
        if (!name.trim() || !brand.trim() || !price.trim() || !image) {
            setError('All fields are required, including an image.');
            setSuccess(false);
            return;
        }
        // Create FormData object for sending data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('price', price);
        formData.append('image', image);
        try {
            // Send data to server via POST request
            const response = await fetch('https://part-9.onrender.com/api/gear', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json(); // Parse JSON response
            if (data.success) {
                setSuccess(true); // Set success message
                addNewItem(data.newItem); // Add new item using callback function
                // Reset form fields
                setName('');
                setBrand('');
                setPrice('');
                setImage(null);
            } else {
                // Handle error response from server
                setError(data.message || 'Failed to add the item.');
                setSuccess(false);
            }
        } catch (err) {
            // Handle network or other errors
            setError('An error occurred while submitting the form.');
            setSuccess(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Brand" 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <input 
                type="file" 
                onChange={handleImageChange} 
            />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Item added successfully!</p>}
        </form>
    );
};
export default DataForm;