import React, { useState } from "react";
import Button from "./components/Button";
import Square from "./components/Square";
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

  return (
    <div className="App">
      <div className="squareContainer">
        <Square id="movingSquare" text="1" />
        <Square text="2" />
      </div>
      <Button text={timer} isDisabled={isDisabled} onStart={onStart} />
    </div>
  );
}

export default App;
