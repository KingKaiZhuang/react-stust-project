import React from "react";
import "../../assets/scss/_Tictactoe.scss";

export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
