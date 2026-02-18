import React from "react";
import { Link } from "react-router-dom";
import "../Css/Nutriplay.css";

export default function Nutriplay() {
  return (
    <div className="nutriplay-container">
      <h1 className="nutriplay-title">🎮 Welcome to Nutriplay!</h1>
      <p className="nutriplay-subtitle">
        Choose a game to test your nutrition knowledge 🥗🍎
      </p>
      <div className="game-cards">
        <div className="game-card">
          <img
            src="https://img.icons8.com/color/200/vegetarian-food.png"
            alt="Healthy Swap"
          />
          <h2>Healthy Swap Challenge</h2>
          <Link to="swap" className="start-btn">
            ▶ Start Game
          </Link>
        </div>

        <div className="game-card">
          <img
            src="https://img.icons8.com/color/200/idea.png"
            alt="Nutrition Myths"
          />
          <h2>Nutrition Myths</h2>
          <Link to="myths" className="start-btn">
            ▶ Start Game
          </Link>
        </div>

        <div className="game-card">
          <img
            src="https://img.icons8.com/color/200/scale.png"
            alt="Calorie Match"
          />
          <h2>Calorie Match Game</h2>
          <Link to="calorie" className="start-btn">
            ▶ Start Game
          </Link>
        </div>
      </div>
    </div>
  );
}
