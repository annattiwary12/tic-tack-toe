import React from "react";
import "../style.css";

const Square = ({ value, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      <span className="square-value">{value}</span>
    </div>
  );
};

export default Square;
