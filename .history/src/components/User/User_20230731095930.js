import React, { useState, useEffect } from "react";
import axios from "axios";

import "./User.css"; // Import your CSS file for styling

const User = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ API khi component được render
    axios
      .get("https://api-ecom.duthanhduoc.com/products")
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product._id} className="product">
          <img src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default User;
