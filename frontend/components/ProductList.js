"use client";
import React, { useEffect, useState } from "react";
// import "./styles.css"; // Import the CSS file

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.name}</li>)
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}
