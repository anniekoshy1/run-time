import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DataFormDisplay.css";

const DataFormDisplay = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGears = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://part-9.onrender.com/api/gear", {
          method: "GET",
        });
        const result = await res.json();
        setData(result.slice(-10));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getGears();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://part-9.onrender.com/api/gear/${id}`, {
        method: "DELETE",
      });
      await res.json();
      setRefresh(prev => !prev)
    } catch (error) {
      console.log(error);
    }
  };

  if(loading) {
    return <p className="loading">Loading....</p>
  }
  return (
    <ul className="products">
      {data.map((item) => {
        return (
          <React.Fragment key={item._id}>
            <Link className="product" to={`/gear/${item._id}`} state={item}>
              {item.img_name ? (
                <img
                  src={`https://part-9.onrender.com/images/${item.img_name}`}
                  alt="Image"
                />
              ) : (
                <img
                  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                  alt="Image"
                />
              )}
              <div>Name:{item.name}</div>
              <div>Brand:{item.brand}</div>
              <div>Price:{item.price}</div>
              <button
                className="delete-btn"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  const shouldDelete = window.confirm(
                    "Are you sure you want to delete the selected product?"
                  );
                  if (shouldDelete) {
                    handleDelete(item._id);
                  }
                }}
              >
                Delete
              </button>
            </Link>{" "}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default DataFormDisplay;
