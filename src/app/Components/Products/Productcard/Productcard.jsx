import React from "react";
import "./productcard.css";
import { FaCartArrowDown } from "react-icons/fa6";

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
        <h3 className="productcard-header">{name}</h3>
        <h3 className="productcard-info">{info}</h3>
        <div className="productcard-bot-wrapper">
          <p className="productcard-price">{price}</p>
          <button className="productcard-button">
              <FaCartArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
