import React from "react";

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
          <img src="/img/Caterpie.gif" alt="Pokemon Gif" />
          <img src="/img/Bulbasur.gif" alt="Pokemon Gif" />
          <img src="/img/Charmander.gif" alt="Pokemon Gif" />
          <img src="/img/Pikachu.gif" alt="Pokemon Gif" />
          <img src="/img/Psyduck.gif" alt="Pokemon Gif" />
          <img src="/img/Squirtle.gif" alt="Pokemon Gif" />
        </div>
        <div>
          <button onClick={resetTurn}>Play again?</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
