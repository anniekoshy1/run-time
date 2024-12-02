import React, { useState } from 'react';
import "./DataForm.css";

const DataForm = ({ addNewItem }) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !brand || !price) {
            setError('All fields are required');
            setSuccess(false);
            setSuccessMessage(false);
            return;
        }

        const priceNumber = parseFloat(price);
        if (isNaN(priceNumber)) {
            setError('Price must be a valid number');
            setSuccess(false);
            setSuccessMessage(false);
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
                setSuccessMessage(true);
                addNewItem(data.newItem);
                setName('');
                setBrand('');
                setPrice('');
                setTimeout(() => setSuccessMessage(false), 2000); // Hide the message after 2 seconds
            } else {
                setError('Failed to add the item');
                setSuccess(false);
                setSuccessMessage(false);
            }
        } catch (err) {
            setError('An error occurred while submitting the form');
            setSuccess(false);
            setSuccessMessage(false);
        }
    };

    return (
        <div className="container" style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Recommended Gear & Equipment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="full-width"
                    required
                />
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="full-width"
                    required
                />
                <div className="bottom-fields">
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    <button type="submit">Add Item</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Item added successfully!</p>}
            {successMessage && <p id="successMessage">Item added successfully!</p>}
        </div>
    );
};

export default DataForm;