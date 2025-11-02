
import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "0.3s",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ fontSize: "18px", margin: "10px 0" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold", color: "#2a9d8f" }}>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
