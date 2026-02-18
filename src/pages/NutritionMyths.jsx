<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "../Css/Game.css";

// a bigger pool of myths (true/false)
const MYTHS_POOL = [
  { statement: "Carbs make you fat.", answer: false },
  { statement: "Eating fat is always bad for your health.", answer: false },
  { statement: "You need protein to build muscles.", answer: true },
  {
    statement: "Breakfast is the most important meal of the day.",
    answer: true,
  },
  { statement: "Sugar causes hyperactivity in children.", answer: false },
  { statement: "Detox teas cleanse your body completely.", answer: false },
  { statement: "All processed foods are unhealthy.", answer: false },
  { statement: "You need 8 glasses of water every day.", answer: false },
  {
    statement: "A gluten-free diet is automatically healthier.",
    answer: false,
  },
  { statement: "Eating after 8 pm makes you gain weight.", answer: false },
  { statement: "Egg yolks are bad for your heart.", answer: false },
  { statement: "Organic foods always have more nutrients.", answer: false },
  { statement: "Skipping meals helps in weight loss.", answer: false },
  { statement: "Coconut oil is a miracle health food.", answer: false },
  { statement: "Low-fat products are always healthier.", answer: false },
  {
    statement:
      "Drinking more water helps your kidneys flush out toxins faster.",
    answer: false,
  },
  { statement: "You can’t get enough protein from plants.", answer: false },
  {
    statement: "Frozen vegetables have fewer nutrients than fresh ones.",
    answer: false,
  },
  { statement: "Artificial sweeteners always cause cancer.", answer: false },
  {
    statement: "High-protein diets damage your kidneys in healthy people.",
    answer: false,
  },
];

// shuffle array for random order
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function NutritionMyths() {
  const TOTAL_QUESTIONS = 10; // how many per session

  const [questions, setQuestions] = useState(() =>
    shuffle(MYTHS_POOL).slice(0, TOTAL_QUESTIONS)
  );
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("mythsHighScore") || 0)
  );

  const score = correct * 10;

  useEffect(() => {
    if (finished && score > highScore) {
      localStorage.setItem("mythsHighScore", String(score));
      setHighScore(score);
    }
  }, [finished, score, highScore]);

  const handleAnswer = (choice) => {
    if (finished) return;

    if (choice === questions[index].answer) {
      setCorrect((c) => c + 1);
      setFeedback({ type: "right", text: "✅ Correct!" });
    } else {
      setWrong((w) => w + 1);
      setFeedback({ type: "wrong", text: "❌ Wrong!" });
    }

    setTimeout(() => {
      setFeedback(null);

      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1100);
  };

  const playAgain = () => {
    setQuestions(shuffle(MYTHS_POOL).slice(0, TOTAL_QUESTIONS));
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
    setFinished(false);
  };

  return (
    <div className="swap-page">
      <div className="swap-header">
        <h1 className="swap-title">Nutrition Myths 🤔</h1>

        <div className="swap-stats">
          <div>
            <span>Question</span>
            <strong>
              {finished ? TOTAL_QUESTIONS : index + 1}/{TOTAL_QUESTIONS}
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
                ((finished ? TOTAL_QUESTIONS : index) / TOTAL_QUESTIONS) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {!finished ? (
        <div className="swap-card">
          <p className="swap-sub">Q: {questions[index].statement}</p>

          <div className="myth-options">
            <button
              className="myth-btn true"
              onClick={() => handleAnswer(true)}
            >
              True
            </button>
            <button
              className="myth-btn false"
              onClick={() => handleAnswer(false)}
            >
              False
            </button>
          </div>

          {feedback && (
            <div className={`swap-feedback ${feedback.type}`}>
              {feedback.text}
            </div>
          )}
        </div>
      ) : (
        <div className="swap-card end-card">
          <h2 className="end-title">Quiz Finished 🎉</h2>
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
=======
import React, { useEffect, useState } from "react";
import "../Css/Game.css";

// a bigger pool of myths (true/false)
const MYTHS_POOL = [
  { statement: "Carbs make you fat.", answer: false },
  { statement: "Eating fat is always bad for your health.", answer: false },
  { statement: "You need protein to build muscles.", answer: true },
  {
    statement: "Breakfast is the most important meal of the day.",
    answer: true,
  },
  { statement: "Sugar causes hyperactivity in children.", answer: false },
  { statement: "Detox teas cleanse your body completely.", answer: false },
  { statement: "All processed foods are unhealthy.", answer: false },
  { statement: "You need 8 glasses of water every day.", answer: false },
  {
    statement: "A gluten-free diet is automatically healthier.",
    answer: false,
  },
  { statement: "Eating after 8 pm makes you gain weight.", answer: false },
  { statement: "Egg yolks are bad for your heart.", answer: false },
  { statement: "Organic foods always have more nutrients.", answer: false },
  { statement: "Skipping meals helps in weight loss.", answer: false },
  { statement: "Coconut oil is a miracle health food.", answer: false },
  { statement: "Low-fat products are always healthier.", answer: false },
  {
    statement:
      "Drinking more water helps your kidneys flush out toxins faster.",
    answer: false,
  },
  { statement: "You can’t get enough protein from plants.", answer: false },
  {
    statement: "Frozen vegetables have fewer nutrients than fresh ones.",
    answer: false,
  },
  { statement: "Artificial sweeteners always cause cancer.", answer: false },
  {
    statement: "High-protein diets damage your kidneys in healthy people.",
    answer: false,
  },
];

// shuffle array for random order
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function NutritionMyths() {
  const TOTAL_QUESTIONS = 10; // how many per session

  const [questions, setQuestions] = useState(() =>
    shuffle(MYTHS_POOL).slice(0, TOTAL_QUESTIONS)
  );
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("mythsHighScore") || 0)
  );

  const score = correct * 10;

  useEffect(() => {
    if (finished && score > highScore) {
      localStorage.setItem("mythsHighScore", String(score));
      setHighScore(score);
    }
  }, [finished, score, highScore]);

  const handleAnswer = (choice) => {
    if (finished) return;

    if (choice === questions[index].answer) {
      setCorrect((c) => c + 1);
      setFeedback({ type: "right", text: "✅ Correct!" });
    } else {
      setWrong((w) => w + 1);
      setFeedback({ type: "wrong", text: "❌ Wrong!" });
    }

    setTimeout(() => {
      setFeedback(null);

      if (index + 1 < questions.length) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1100);
  };

  const playAgain = () => {
    setQuestions(shuffle(MYTHS_POOL).slice(0, TOTAL_QUESTIONS));
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
    setFinished(false);
  };

  return (
    <div className="swap-page">
      <div className="swap-header">
        <h1 className="swap-title">Nutrition Myths 🤔</h1>

        <div className="swap-stats">
          <div>
            <span>Question</span>
            <strong>
              {finished ? TOTAL_QUESTIONS : index + 1}/{TOTAL_QUESTIONS}
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
                ((finished ? TOTAL_QUESTIONS : index) / TOTAL_QUESTIONS) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {!finished ? (
        <div className="swap-card">
          <p className="swap-sub">Q: {questions[index].statement}</p>

          <div className="myth-options">
            <button
              className="myth-btn true"
              onClick={() => handleAnswer(true)}
            >
              True
            </button>
            <button
              className="myth-btn false"
              onClick={() => handleAnswer(false)}
            >
              False
            </button>
          </div>

          {feedback && (
            <div className={`swap-feedback ${feedback.type}`}>
              {feedback.text}
            </div>
          )}
        </div>
      ) : (
        <div className="swap-card end-card">
          <h2 className="end-title">Quiz Finished 🎉</h2>
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
>>>>>>> c768e10a8b9240f8cb33177b72ef395fd7c67bc6
