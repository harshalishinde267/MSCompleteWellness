import React, { useEffect, useState } from "react";
import "../Css/Game.css";

// larger pool of foods with calories
const FOODS_POOL = [
  {
    food: "Apple",
    img: "https://img.icons8.com/color/200/apple.png",
    calories: 95,
  },
  {
    food: "Banana",
    img: "https://img.icons8.com/color/200/banana.png",
    calories: 105,
  },
  {
    food: "Burger",
    img: "https://img.icons8.com/color/200/hamburger.png",
    calories: 354,
  },
  {
    food: "Pizza Slice",
    img: "https://img.icons8.com/color/200/pizza.png",
    calories: 285,
  },
  {
    food: "Ice Cream Cone",
    img: "https://img.icons8.com/fluency/200/cupcake.png",
    calories: 250,
  },
  {
    food: "Orange Juice",
    img: "https://img.icons8.com/fluency/200/orange-juice.png",
    calories: 110,
  },
  {
    food: "Avocado",
    img: "https://img.icons8.com/fluency/200/avocado.png",
    calories: 160,
  },
  {
    food: "Salad Bowl",
    img: "https://img.icons8.com/color/200/salad.png",
    calories: 150,
  },
  {
    food: "French Fries",
    img: "https://img.icons8.com/color/200/french-fries.png",
    calories: 312,
  },
  {
    food: "Grilled Chicken",
    img: "https://img.icons8.com/fluency/200/chicken-leg.png",
    calories: 220,
  },
];

// shuffle array
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CalorieMatch() {
  const TOTAL_ROUNDS = 8;

  const [foods, setFoods] = useState(() =>
    shuffle(FOODS_POOL).slice(0, TOTAL_ROUNDS)
  );
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("calorieHighScore") || 0)
  );

  const food = foods[index];
  const score = correct * 10;

  // build options: real + 2 random offsets
  const options = [
    food.calories,
    food.calories + (Math.floor(Math.random() * 50) + 20),
    food.calories - (Math.floor(Math.random() * 50) + 20),
  ].sort(() => Math.random() - 0.5);

  useEffect(() => {
    if (finished && score > highScore) {
      localStorage.setItem("calorieHighScore", String(score));
      setHighScore(score);
    }
  }, [finished, score, highScore]);

  const checkAnswer = (guess) => {
    if (finished) return;

    if (guess === food.calories) {
      setCorrect((c) => c + 1);
      setFeedback({ type: "right", text: "✅ Correct!" });
    } else {
      setWrong((w) => w + 1);
      setFeedback({ type: "wrong", text: `❌ Nope! Actual: ${food.calories}` });
    }

    setTimeout(() => {
      setFeedback(null);

      if (index + 1 < foods.length) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1100);
  };

  const playAgain = () => {
    setFoods(shuffle(FOODS_POOL).slice(0, TOTAL_ROUNDS));
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
    setFinished(false);
  };

  return (
    <div className="swap-page">
      <div className="swap-header">
        <h1 className="swap-title">Calorie Match Game 🔥</h1>

        <div className="swap-stats">
          <div>
            <span>Round</span>
            <strong>
              {finished ? TOTAL_ROUNDS : index + 1}/{TOTAL_ROUNDS}
            </strong>
          </div>
          <div>
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div>
            <span>Correct</span>
            <strong>{correct}</strong>
          </div>
          <div>
            <span>Wrong</span>
            <strong>{wrong}</strong>
          </div>
          <div className="hi-score">
            <span>High Score</span>
            <strong>{highScore}</strong>
          </div>
        </div>

        <div className="swap-progress">
          <div
            className="swap-progress-bar"
            style={{
              width: `${
                ((finished ? TOTAL_ROUNDS : index) / TOTAL_ROUNDS) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {!finished ? (
        <div className="swap-card">
          <img
            src={food.img}
            alt={food.food}
            className="food-img"
            onError={(e) => {
              e.currentTarget.src =
                "https://img.icons8.com/color/200/question-mark.png";
            }}
          />
          <p className="swap-sub">How many calories does this have?</p>

          <div className="myth-options">
            {options.map((opt, i) => (
              <button
                key={i}
                className="myth-btn"
                onClick={() => checkAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`swap-feedback ${feedback.type}`}>
              {feedback.text}
            </div>
          )}
        </div>
      ) : (
        <div className="swap-card end-card">
          <h2 className="end-title">Game Finished 🎉</h2>
          <p className="end-stats">
            Final Score: <strong>{score}</strong> · Correct:{" "}
            <strong>{correct}</strong> · Wrong: <strong>{wrong}</strong>
          </p>
          <button className="swap-cta" onClick={playAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
