import React from "react";
import Pokemon1 from "./img/Pikachu.gif";
import Pokemon2 from "./img/Caterpie.gif";
import Pokemon3 from "./img/Charmander.gif";
import Pokemon4 from "./img/Psyduck.gif";
import Pokemon5 from "./img/Squirtle.gif";
import Pokemon6 from "./img/Bulbasur.gif";

import "./Popup.css";
const Popup = ({ resetTurn, victory }) => {
  return (
    <div
      className="popup-container"
      style={victory !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h1>You won! &#x1F601;</h1>
        <div className="image-container">
          <img src={Pokemon1} alt="Pokemon Gif" />
          <img src={Pokemon2} alt="Pokemon Gif" />
          <img src={Pokemon3} alt="Pokemon Gif" />
          <img src={Pokemon4} alt="Pokemon Gif" />
          <img src={Pokemon5} alt="Pokemon Gif" />
          <img src={Pokemon6} alt="Pokemon Gif" />
        </div>
        <div>
          <button onClick={resetTurn}>Play again?</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
