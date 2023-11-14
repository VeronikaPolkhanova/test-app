import React from "react";

const Button = ({ text, isDisabled, onStart }) => {
  return (
    <button
      className={isDisabled ? "isDisabled" : ""}
      disabled={isDisabled}
      onClick={onStart}>
      {isDisabled ? text : "Start"}
    </button>
  );
};

export default Button;
