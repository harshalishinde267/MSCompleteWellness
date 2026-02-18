<<<<<<< HEAD
// src/pages/HealthySwap.jsx
import React, { useEffect, useMemo, useState } from "react";
import "../Css/Game.css";

// --- Food option pool (add/remove freely) -------------------
const POOL = [
  // healthy
  {
    name: "Salad",
    img: "https://img.icons8.com/color/200/salad.png",
    healthy: true,
  },
  {
    name: "Apple",
    img: "https://img.icons8.com/color/200/apple.png",
    healthy: true,
  },
  {
    name: "Berries",
    img: "https://img.icons8.com/fluency/200/strawberry.png",
    healthy: true,
  },

  {
    name: "Nuts",
    img: "https://img.icons8.com/fluency/200/almond.png",
    healthy: true,
  },
  {
    name: "Grilled Fish",
    img: "https://img.icons8.com/color/200/fish-food.png",
    healthy: true,
  },
  {
    name: "Greek Yogurt",
    img: "https://img.icons8.com/color/200/yogurt.png",
    healthy: true,
  },
  {
    name: "Oats",
    img: "https://img.icons8.com/color/200/oat-milk.png",
    healthy: true,
  },
  {
    name: "Avocado Dip",
    img: "https://img.icons8.com/fluency/200/guacamole.png",
    healthy: true,
  },
  {
    name: "Water",
    img: "https://img.icons8.com/color/200/water.png",
    healthy: true,
  },
  {
    name: "Orange Juice",
    img: "https://img.icons8.com/fluency/200/orange-juice.png",
    healthy: true,
  },
  {
    name: "French Fries",
    img: "https://img.icons8.com/color/200/french-fries.png",
    healthy: false,
  },
  {
    name: "Soda",
    img: "https://img.icons8.com/color/200/soda-bottle.png",
    healthy: false,
  },
  {
    name: "Burger",
    img: "https://img.icons8.com/color/200/hamburger.png",
    healthy: false,
  },
  {
    name: "Cake",
    img: "https://img.icons8.com/color/200/birthday-cake.png",
    healthy: false,
  },
  {
    name: "Donut",
    img: "https://img.icons8.com/color/200/doughnut.png",
    healthy: false,
  },
  {
    name: "Chocolate Bar",
    img: "https://img.icons8.com/color/200/chocolate-bar.png",
    healthy: false,
  },
  {
    name: "Pizza",
    img: "https://img.icons8.com/color/200/pizza.png",
    healthy: false,
  },
  {
    name: "Cupcake",
    img: "https://img.icons8.com/fluency/200/cupcake.png",
    healthy: false,
  },

  {
    name: "Milkshake",
    img: "https://img.icons8.com/color/200/milkshake.png",
    healthy: false,
  },
  {
    name: "Cookies",
    img: "https://img.icons8.com/color/200/cookie.png",
    healthy: false,
  },
];

// --- utils ---------------------------------------------------
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Build a session with N rounds; each round = 1 healthy + (optionsPerRound-1) less-healthy
function buildRounds(totalRounds = 8, optionsPerRound = 3) {
  const healthy = POOL.filter((x) => x.healthy);
  const less = POOL.filter((x) => !x.healthy);

  const rounds = [];
  const usedPairs = new Set();

  while (rounds.length < totalRounds) {
    const h = healthy[Math.floor(Math.random() * healthy.length)];

    // pick (optionsPerRound - 1) distinct less-healthy
    const lessShuffled = shuffle(less).slice(0, optionsPerRound - 1);

    // prevent same healthy + same set of less-healthy repeating
    const key =
      h.name +
      "::" +
      lessShuffled
        .map((x) => x.name)
        .sort()
        .join("|");
    if (usedPairs.has(key)) continue;
    usedPairs.add(key);

    const options = shuffle([h, ...lessShuffled]);
    rounds.push({ options, answerName: h.name });
  }
  return rounds;
}

export default function HealthySwap() {
  const TOTAL_ROUNDS = 8;
  const OPTIONS_PER_ROUND = 3;

  const [rounds, setRounds] = useState(() =>
    buildRounds(TOTAL_ROUNDS, OPTIONS_PER_ROUND)
  );
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("swapHighScore") || 0)
  );

  const current = useMemo(() => rounds[idx], [rounds, idx]);
  const score = correct * 10; // 10 points per correct

  useEffect(() => {
    if (finished) {
      if (score > highScore) {
        localStorage.setItem("swapHighScore", String(score));
        setHighScore(score);
      }
    }
  }, [finished, score, highScore]);

  const handleChoice = (opt) => {
    if (locked || finished) return;
    setLocked(true);

    if (opt.healthy) {
      setCorrect((c) => c + 1);
      setFeedback({ type: "right", text: "✅ Correct choice!" });
    } else {
      setWrong((w) => w + 1);
      setFeedback({ type: "wrong", text: "❌ Oops! Pick the healthiest one." });
    }

    setTimeout(() => {
      setFeedback(null);
      setLocked(false);

      if (idx + 1 < rounds.length) {
        setIdx((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1100);
  };

  const playAgain = () => {
    setRounds(buildRounds(TOTAL_ROUNDS, OPTIONS_PER_ROUND));
    setIdx(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
    setLocked(false);
    setFinished(false);
  };

  return (
    <div className="swap-page">
      {/* Header / stats */}
      <div className="swap-header">
        <h1 className="swap-title">Healthy Swap Challenge 🥗</h1>

        <div className="swap-stats">
          <div>
            <span>Round</span>
            <strong>
              {finished ? TOTAL_ROUNDS : idx + 1}/{TOTAL_ROUNDS}
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
                ((finished ? TOTAL_ROUNDS : idx) / TOTAL_ROUNDS) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Game card */}
      {!finished ? (
        <div className="swap-card">
          <p className="swap-sub">Pick the healthiest option below</p>

          <div className="swap-grid">
            {current.options.map((opt, i) => (
              <button
                key={opt.name + i}
                className={`swap-option ${locked ? "locked" : ""}`}
                onClick={() => handleChoice(opt)}
                disabled={locked}
                aria-label={opt.name}
                title={opt.name}
              >
                <img src={opt.img} alt={opt.name} />
                <span>{opt.name}</span>
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
          <h2 className="end-title">Great job! 🎉</h2>
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
// src/pages/HealthySwap.jsx
import React, { useEffect, useMemo, useState } from "react";
import "../Css/Game.css";

// --- Food option pool (add/remove freely) -------------------
const POOL = [
  // healthy
  {
    name: "Salad",
    img: "https://img.icons8.com/color/200/salad.png",
    healthy: true,
  },
  {
    name: "Apple",
    img: "https://img.icons8.com/color/200/apple.png",
    healthy: true,
  },
  {
    name: "Berries",
    img: "https://img.icons8.com/fluency/200/strawberry.png",
    healthy: true,
  },

  {
    name: "Nuts",
    img: "https://img.icons8.com/fluency/200/almond.png",
    healthy: true,
  },
  {
    name: "Grilled Fish",
    img: "https://img.icons8.com/color/200/fish-food.png",
    healthy: true,
  },
  {
    name: "Greek Yogurt",
    img: "https://img.icons8.com/color/200/yogurt.png",
    healthy: true,
  },
  {
    name: "Oats",
    img: "https://img.icons8.com/color/200/oat-milk.png",
    healthy: true,
  },
  {
    name: "Avocado Dip",
    img: "https://img.icons8.com/fluency/200/guacamole.png",
    healthy: true,
  },
  {
    name: "Water",
    img: "https://img.icons8.com/color/200/water.png",
    healthy: true,
  },
  {
    name: "Orange Juice",
    img: "https://img.icons8.com/fluency/200/orange-juice.png",
    healthy: true,
  },
  {
    name: "French Fries",
    img: "https://img.icons8.com/color/200/french-fries.png",
    healthy: false,
  },
  {
    name: "Soda",
    img: "https://img.icons8.com/color/200/soda-bottle.png",
    healthy: false,
  },
  {
    name: "Burger",
    img: "https://img.icons8.com/color/200/hamburger.png",
    healthy: false,
  },
  {
    name: "Cake",
    img: "https://img.icons8.com/color/200/birthday-cake.png",
    healthy: false,
  },
  {
    name: "Donut",
    img: "https://img.icons8.com/color/200/doughnut.png",
    healthy: false,
  },
  {
    name: "Chocolate Bar",
    img: "https://img.icons8.com/color/200/chocolate-bar.png",
    healthy: false,
  },
  {
    name: "Pizza",
    img: "https://img.icons8.com/color/200/pizza.png",
    healthy: false,
  },
  {
    name: "Cupcake",
    img: "https://img.icons8.com/fluency/200/cupcake.png",
    healthy: false,
  },

  {
    name: "Milkshake",
    img: "https://img.icons8.com/color/200/milkshake.png",
    healthy: false,
  },
  {
    name: "Cookies",
    img: "https://img.icons8.com/color/200/cookie.png",
    healthy: false,
  },
];

// --- utils ---------------------------------------------------
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Build a session with N rounds; each round = 1 healthy + (optionsPerRound-1) less-healthy
function buildRounds(totalRounds = 8, optionsPerRound = 3) {
  const healthy = POOL.filter((x) => x.healthy);
  const less = POOL.filter((x) => !x.healthy);

  const rounds = [];
  const usedPairs = new Set();

  while (rounds.length < totalRounds) {
    const h = healthy[Math.floor(Math.random() * healthy.length)];

    // pick (optionsPerRound - 1) distinct less-healthy
    const lessShuffled = shuffle(less).slice(0, optionsPerRound - 1);

    // prevent same healthy + same set of less-healthy repeating
    const key =
      h.name +
      "::" +
      lessShuffled
        .map((x) => x.name)
        .sort()
        .join("|");
    if (usedPairs.has(key)) continue;
    usedPairs.add(key);

    const options = shuffle([h, ...lessShuffled]);
    rounds.push({ options, answerName: h.name });
  }
  return rounds;
}

export default function HealthySwap() {
  const TOTAL_ROUNDS = 8;
  const OPTIONS_PER_ROUND = 3;

  const [rounds, setRounds] = useState(() =>
    buildRounds(TOTAL_ROUNDS, OPTIONS_PER_ROUND)
  );
  const [idx, setIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [highScore, setHighScore] = useState(() =>
    Number(localStorage.getItem("swapHighScore") || 0)
  );

  const current = useMemo(() => rounds[idx], [rounds, idx]);
  const score = correct * 10; // 10 points per correct

  useEffect(() => {
    if (finished) {
      if (score > highScore) {
        localStorage.setItem("swapHighScore", String(score));
        setHighScore(score);
      }
    }
  }, [finished, score, highScore]);

  const handleChoice = (opt) => {
    if (locked || finished) return;
    setLocked(true);

    if (opt.healthy) {
      setCorrect((c) => c + 1);
      setFeedback({ type: "right", text: "✅ Correct choice!" });
    } else {
      setWrong((w) => w + 1);
      setFeedback({ type: "wrong", text: "❌ Oops! Pick the healthiest one." });
    }

    setTimeout(() => {
      setFeedback(null);
      setLocked(false);

      if (idx + 1 < rounds.length) {
        setIdx((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1100);
  };

  const playAgain = () => {
    setRounds(buildRounds(TOTAL_ROUNDS, OPTIONS_PER_ROUND));
    setIdx(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
    setLocked(false);
    setFinished(false);
  };

  return (
    <div className="swap-page">
      {/* Header / stats */}
      <div className="swap-header">
        <h1 className="swap-title">Healthy Swap Challenge 🥗</h1>

        <div className="swap-stats">
          <div>
            <span>Round</span>
            <strong>
              {finished ? TOTAL_ROUNDS : idx + 1}/{TOTAL_ROUNDS}
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
                ((finished ? TOTAL_ROUNDS : idx) / TOTAL_ROUNDS) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Game card */}
      {!finished ? (
        <div className="swap-card">
          <p className="swap-sub">Pick the healthiest option below</p>

          <div className="swap-grid">
            {current.options.map((opt, i) => (
              <button
                key={opt.name + i}
                className={`swap-option ${locked ? "locked" : ""}`}
                onClick={() => handleChoice(opt)}
                disabled={locked}
                aria-label={opt.name}
                title={opt.name}
              >
                <img src={opt.img} alt={opt.name} />
                <span>{opt.name}</span>
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
          <h2 className="end-title">Great job! 🎉</h2>
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
