import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DataForm = ({ addNewItem, updateItem, deleteItem }) => {
    // State variables for form inputs and feedback messages

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const   {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(state) {
            const {_id, name, price ,brand, img_name} = state || {}
            setName(name);
            setPrice( "" + price);
            setBrand(brand);
            setPreviewUrl(`https://part-9.onrender.com/images/${img_name}`)
        }
    }, [state]);
   

    // Function to handle image file selection
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        const fileReader = new FileReader();
        fileReader.onloadend = function() {
            setPreviewUrl(fileReader.result)
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Validate input fields
        if (!name.trim() || !brand.trim() || !price.trim()) {
            setError('All fields are required');
            setSuccess(false);
            return;
        }

        // Create FormData object for sending data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('brand', brand);
        formData.append('price', price);
        if(image) {
            formData.append('gear', image);
        }

        try {
            let response;
            if(state) { 
                // Send data to server via POST request
                response = await fetch(`https://part-9.onrender.com/api/gear/${state._id}`, {
                    method: 'PUT',
                    body: formData,
                });
            } else {
                
                // Send data to server via POST request
                response = await fetch('https://part-9.onrender.com/api/gear', {
                    method: 'POST',
                    body: formData,
                
                });
             }
            const data = await response.json(); // Parse JSON response
            if (data.success) {
                setSuccess(true); // Set success message
                data.newItem && addNewItem(data.newItem); // Add new item using callback function
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
            if(data.success && state) {
                setTimeout(() => {
                    navigate('/gear')
                }, 2000)
            }
        } catch (err) {
            console.log('errMsg', err)
            // Handle network or other errors
            setError('An error occurred while submitting the form.');
            setSuccess(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
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
            <input 
                type="text" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                className="full-width"
                required
            />
            {state && <img src={previewUrl  || image } style={{width: '150px', height: '150px'}}/>}
            <label>Select Image to upload:</label>
            <input 
                type="file" 
                onChange={handleImageChange} 
            />
            <button type="submit">{state ? 'Update' : 'Submit'}</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Item {state ? 'updated' : 'added'} successfully!</p>}
        </form>
    );
};

export default DataForm;


