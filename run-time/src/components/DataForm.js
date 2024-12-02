import React, { useState } from 'react';
import "./DataForm.css";

const DataForm = ({ addNewItem }) => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !brand || !price) {
            setError('All fields are required');
            setSuccessMessage(false);
            return;
        }

        const priceNumber = parseFloat(price);
        if (isNaN(priceNumber)) {
            setError('Price must be a valid number');
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
                setSuccessMessage(true);
                addNewItem(data.newItem);
                setName('');
                setBrand('');
                setPrice('');
                setTimeout(() => setSuccessMessage(false), 2000);
            } else {
                setError('Failed to add the item');
                setSuccessMessage(false);
            }
        } catch (err) {
            setError('An error occurred while submitting the form');
            setSuccessMessage(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="full-width"
                />
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="full-width"
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
            {successMessage && <p id="successMessage">Item added successfully!</p>}
        </div>
    );
};

export default DataForm;