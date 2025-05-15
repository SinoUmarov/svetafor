import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [activeLight, setActiveLight] = useState("red");
  const [secondsLeft, setSecondsLeft] = useState(3);

  const durations = {
    red: 3,
    yellow: 1,
    green: 3,
  };

  const getNextColor = (color) => {
    if (color === "red") return "yellow";
    if (color === "yellow") return "green";
    return "red";
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          const next = getNextColor(activeLight);
          setActiveLight(next);
          return durations[next];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [activeLight]);

  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === "red" ? "on" : ""}`}>
        {activeLight === "red" && <span className="timer">{secondsLeft}</span>}
      </div>
      <div className={`light yellow ${activeLight === "yellow" ? "on" : ""}`}>
        {activeLight === "yellow" && <span className="timer">{secondsLeft}</span>}
      </div>
      <div className={`light green ${activeLight === "green" ? "on" : ""}`}>
        {activeLight === "green" && <span className="timer">{secondsLeft}</span>}
      </div>
    </div>
  );
}
