import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-wrapper">
        <div className="main-wrapper-left">
          <img src="../src/assets/geralt.png" alt="" />
        </div>
        <div className="main-wrapper-right">
          <div className="main-card">
            <div className="card-header">
              <p>The Witcher 3</p>
            </div>
            <div className="card-text">
              <p>
                The Witcher 3: Wild Hunt is a 2015 action role-playing game
                developed and published by CD Projekt. It is the sequel to the
                2011 game The Witcher 2: Assassins of Kings and the third game
                in The Witcher video game series, played in an open world with a
                third-person perspective. The games follow the Witcher series of
                fantasy novels written by Andrzej Sapkowski.
              </p>
            </div>
            <div className="card-button">
              <button>Pre-Order Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
