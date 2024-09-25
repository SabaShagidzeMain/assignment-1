import React from "react";
import Productcard from "./ProductCard/Productcard";
import content from "./ProductContent/content";
import productData from "./ProductContent/content";
import "./Products.css";

const ProductList = () => {
  const product = productData[0];
  return (
    <div className="products-wrapper">
      <Productcard product={product} />
      <Productcard product={product} />
      <Productcard product={product} />
      <Productcard product={product} />
      <Productcard product={product} />
      <Productcard product={product} />
    </div>
  );
};

export default ProductList;
