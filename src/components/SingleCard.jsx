import React from "react";
import "./SingleCard.css";
import Cover from "./img/cover.png";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <>
      <div className="card">
        <div className={flipped ? `flipped` : ""}>
          <img className="front" src={card.src} alt="Card Front" />
          <img
            className="back"
            onClick={handleClick}
            src={Cover}
            alt="Card Cover"
          />
        </div>
      </div>
    </>
  );
};

export default SingleCard;
