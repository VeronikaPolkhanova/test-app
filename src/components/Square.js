import React from "react";

const Square = ({ text, id }) => {
  return (
    <div id={id} className="square">
      {text}
    </div>
  );
};

export default Square;
