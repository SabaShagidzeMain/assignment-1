import React from "react";
import productData from "./ProductContent/content";
import Productcard from "./ProductCard/Productcard";
import "./products.css";
const ProductList = () => {
  return (
    <div className="product-list products-wrapper">
      {productData.map((product) => (
        <Productcard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductList;
