import React from "react";

const Square = ({ text, refProp, id }) => {
  return (
    <div id={id} ref={refProp} className="square">
      {text}
    </div>
  );
};

export default Square;
