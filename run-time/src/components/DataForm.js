import React, { useState, useEffect } from "react";

const DataForm = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [gearItems, setGearItems] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  // Fetch gear items from the server
  const fetchGearItems = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/gear");
      const data = await response.json();
      setGearItems(data);
    } catch (err) {
      setError("Failed to fetch gear items");
    }
  };

  useEffect(() => {
    fetchGearItems();
  }, []);

  // Add a new item
  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      const response = await fetch("http://localhost:4000/api/gear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, brand, price: priceNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setGearItems((prevItems) => [...prevItems, data.newItem]);
        setName("");
        setBrand("");
        setPrice("");
        setMessage("Item added successfully!");
        setError(null);
      } else {
        setError("Failed to add the item");
      }
    } catch (err) {
      setError("An error occurred while adding the item");
    }
  };

  // Delete an item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/gear/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setGearItems((prevItems) => prevItems.filter((item) => item._id !== id));
        setMessage("Item deleted successfully!");
      } else {
        setError("Failed to delete the item");
      }
    } catch (err) {
      setError("An error occurred while deleting the item");
    }
  };

  // Edit an item
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!name || !brand || !price) {
      setError("All fields are required");
      return;
    }

    const priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
      setError("Price must be a valid number");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/gear/${editingItem._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, brand, price: priceNumber }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setGearItems((prevItems) =>
          prevItems.map((item) =>
            item._id === editingItem._id ? data.updatedItem : item
          )
        );
        setName("");
        setBrand("");
        setPrice("");
        setEditingItem(null);
        setMessage("Item updated successfully!");
      } else {
        setError("Failed to update the item");
      }
    } catch (err) {
      setError("An error occurred while updating the item");
    }
  };

  // Start editing an item
  const startEditing = (item) => {
    setEditingItem(item);
    setName(item.name);
    setBrand(item.brand);
    setPrice(item.price);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <form onSubmit={editingItem ? handleEditSubmit : handleSubmit}>
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
        <button type="submit">{editingItem ? "Update Item" : "Add Item"}</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {gearItems.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong> - {item.brand} - ${item.price}
            <button onClick={() => startEditing(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataForm;