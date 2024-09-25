import React from "react";
import "./productcard.css";

const Productcard = ({ productData }) => {
  const { id, image, name, info, price } = productData;

  return (
    <div className="productcard" key={id}>
      <div className="productcard-image-wrapper">
        <img
          src={image}
          alt={`${name} product`}
          className="productcard-image"
        />
      </div>
      <div className="productcard-wrapper">
        <h3 className="productcard-name">{name}</h3>
        <h3 className="productcard-info">{info}</h3>
        <p className="productcard-price">{price}</p>
        <button className="productcard-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default Productcard;
