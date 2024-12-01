import React, { useState, useEffect } from "react";

const API_URL = "https://part-9.onrender.com/api/gear";

const DataForm = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [gearItems, setGearItems] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGearItems = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setGearItems(data);
    } catch (err) {
      setError("Failed to fetch gear items");
    }
  };

  useEffect(() => {
    fetchGearItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!name || !brand || !price) {
      setError("All fields are required");
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      setError("Price must be a valid number");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: editingItem ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, brand, price: priceNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        if (editingItem) {
          setGearItems((prevItems) =>
            prevItems.map((item) =>
              item._id === editingItem._id ? data.updatedItem : item
            )
          );
          setMessage("Item updated successfully!");
        } else {
          setGearItems((prevItems) => [...prevItems, data.newItem]);
          setMessage("Item added successfully!");
        }
        setName("");
        setBrand("");
        setPrice("");
        setEditingItem(null);
      } else {
        setError(data.message || "Failed to process the request");
      }
    } catch (err) {
      setError("An error occurred while processing the request");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setGearItems((prevItems) => prevItems.filter((item) => item._id !== id));
        setMessage("Item deleted successfully!");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to delete the item");
      }
    } catch (err) {
      setError("An error occurred while deleting the item");
    }
  };

  const startEditing = (item) => {
    setEditingItem(item);
    setName(item.name);
    setBrand(item.brand);
    setPrice(item.price);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
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
        <button type="submit" disabled={loading}>
          {editingItem ? "Update Item" : "Add Item"}
        </button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {gearItems.length === 0 ? (
        <p>Loading gear items...</p>
      ) : (
        <ul>
          {gearItems.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong> - {item.brand} - $
              {parseFloat(item.price).toFixed(2)}
              <button onClick={() => startEditing(item)}>Edit</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataForm;