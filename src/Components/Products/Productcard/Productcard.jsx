import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productcard">
      <div className="productcard-image-wrapper">
        <img
          className="productcard-image"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="productcard-wrapper">
        <h2 className="productcard-header">{product.name}</h2>
        <p className="productcard-info">{product.description}</p>
        <p className="productcard-price">{product.price}</p>
        <button className="productcard-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
