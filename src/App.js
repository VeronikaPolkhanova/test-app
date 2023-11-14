import React, { useState, useRef } from "react";
import Button from "./components/Button";
import Square from "./components/Square";
import Circle from "./components/Circle";
import "./App.css";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [timer, setTimer] = useState(5);

  const onStart = () => {
    setIsDisabled(true);
    const interval = setInterval(() => setTimer((timer) => timer - 1), 1000);

    setTimeout(() => {
      clearInterval(interval);
      setTimer(5);
      setIsDisabled(false);
    }, 5000);
  };

  const movingSquare = useRef(null);
  const destinationSquare = useRef(null);

  let keyframes = `
  @keyframes moving {
      0% {
      top:${movingSquare?.current?.getBoundingClientRect()?.top}px; 
      left: ${movingSquare?.current?.getBoundingClientRect()?.left}px;
    }
      100% {
      top: ${destinationSquare?.current?.getBoundingClientRect()?.top}px;
      left: ${destinationSquare?.current?.getBoundingClientRect()?.left}px;
    }
}`;

  var styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  var styleSheet = styleEl.sheet;
  styleSheet.insertRule(keyframes, 0);

  const styles = {
    display: isDisabled ? "block" : "none",
    animation: "moving 2s infinite",
  };

  return (
    <div className="App">
      <div className="squareContainer">
        <Circle styles={styles} />
        <Square id="movingSquare" refProp={movingSquare} text="1" />
        <Square id="destinationSquare" refProp={destinationSquare} text="2" />
      </div>
      <Button text={timer} isDisabled={isDisabled} onStart={onStart} />
    </div>
  );
}

export default App;
