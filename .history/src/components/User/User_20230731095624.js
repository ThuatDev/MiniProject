import React, { useState, useEffect } from "react";
import axios from "axios";

import "./User.css"; // Import your CSS file for styling

const User = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ API khi component được render
    axios
      .get("https://api-ecom.duthanhduoc.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default User;
