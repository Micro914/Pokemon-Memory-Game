import React, { useState, useEffect } from "react";
import SingleCard from "./components/SingleCard";
import "./App.css";
import Popup from "./components/Popup";

const cardImages = [
  { src: "/img/Caterpie.gif", matched: false },
  { src: "/img/Charmander.gif", matched: false },
  { src: "/img/Squirtle.gif", matched: false },
  { src: "/img/Pikachu.gif", matched: false },
  { src: "/img/Psyduck.gif", matched: false },
  { src: "/img/Bulbasur.gif", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [victory, setVictory] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() * 200 }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
    setVictory(false);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setdisabled(false);
    setVictory(false);
  };

  const finishTurn = () => {
    if (cards.length > 0) {
      let x = cards.map((card) => {
        return card.matched;
      });
      let Alltrue = x.every((boolean) => boolean === true);
      if (Alltrue) {
        return setVictory(true);
      }
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setdisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          return resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    finishTurn();
  }, [cards]);

  // useEffect(() => {

  // }, []);

  return (
    <div className="app">
      <img className="title" src="/img/Title.png" alt="Title" />
      {/* <h1>Who's that Pokemon?!</h1> */}
      <div>
        <button onClick={shuffleCards}>New Game</button>
      </div>
      <div className="cards-grid">
        {cards.map((card) => (
          <SingleCard
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      {victory && <Popup victory={victory} resetTurn={shuffleCards} />}
    </div>
  );
}

export default App;
