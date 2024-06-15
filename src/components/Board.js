import React from "react";
import Cell from "./Cell";

const Board = ({ grid, setHoverRow, setHoverCol }) => {
  return (
    <div
      className="board grid gap-1 justify-center"
      onMouseLeave={() => {
        setHoverRow(null);
        setHoverCol(null);
      }}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row flex gap-1">
          {row.map((cell, colIndex) => (
            <Cell key={colIndex} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
