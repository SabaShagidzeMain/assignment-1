import React from "react";
import "./Main.css";
import Products from "../Products/Products";

const Main = () => {
  return (
    <main className="main">
      <div className="main-wrapper">
        <Products />
      </div>
    </main>
  );
};

export default Main;
