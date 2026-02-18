import React, { useEffect, useRef } from "react";
import "../Css/DermatologyVideos.css";

const videos = [
  {
    id: 1,
    title: "Filler Treatment 1",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Filler Treatment 2",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "Filler Treatment 3",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "Filler Treatment 4",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
];

export default function DermatologyVideos() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of card is visible
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="videos-container">
      <h1 className="heading">Dermatology Filler Procedures</h1>

      <div className="videos-list">
        {videos.map((video, index) => (
          <div
            key={video.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`video-card hidden ${
              index % 2 === 0 ? "from-left" : "from-right"
            }`}
          >
            <div className="video-wrapper">
              <video src={video.url} muted loop className="video" />
              <div className="overlay">
                <button className="play-btn">❚❚</button>
              </div>
            </div>
            <div className="video-info">
              <h2>{video.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
