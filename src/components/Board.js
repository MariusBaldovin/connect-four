import React from "react";
import Cell from "./Cell";

const Board = ({
  grid,
  hoverRow,
  hoverCol,
  setHoverRow,
  setHoverCol,
  dropToken,
  currentPlayer,
  exitGame,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
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
              <Cell
                key={colIndex}
                value={cell}
                onClick={() => dropToken(rowIndex, colIndex)}
                onMouseEnter={() => {
                  setHoverRow(rowIndex);
                  setHoverCol(colIndex);
                }}
                isHovering={hoverRow === rowIndex && hoverCol === colIndex}
                currentPlayer={currentPlayer}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={exitGame}
        className="mt-10 px-4 py-2 w-fit justify-center bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Exit Game
      </button>
      ;
    </div>
  );
};

export default Board;
