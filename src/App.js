import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import Board from "./components/Board";

const App = () => {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(7);
  const [winLength, setWinLength] = useState(4);
  const [currentPlayer, setCurrentPlayer] = useState("Red");
  const [grid, setGrid] = useState(
    Array(6)
      .fill()
      .map(() => Array(7).fill(" "))
  );
  const [hoverRow, setHoverRow] = useState(null); // New state to track hover row
  const [hoverCol, setHoverCol] = useState(null); // New state to track hover column
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  // Callback function to start the game
  const startGame = useCallback((newRows, newCols, newWinLength) => {
    console.log(
      `Starting game with rows: ${rows}, cols: ${cols}, winLength: ${winLength}`
    );
    setRows(newRows);
    setCols(newCols);
    setWinLength(newWinLength);
    setGrid(
      Array(newRows)
        .fill()
        .map(() => Array(newCols).fill(" "))
    );
    setCurrentPlayer("Red");
    setWinner(null);
    setHoverRow(null);
    setHoverCol(null);
    setGameStarted(true);
  }, []);

  return (
    <>
      <div className="mt-10 text-4xl text-center font-extrabold text-slate-900">
        CONNECT FOUR GAME
      </div>
      {gameStarted ? (
        <>
          <Board
            grid={grid}
            hoverRow={hoverRow}
            hoverCol={hoverCol}
            setHoverRow={setHoverRow}
            setHoverCol={setHoverCol}
            //dropToken={dropToken}
            currentPlayer={currentPlayer}
          />
        </>
      ) : (
        <Home startGame={startGame} />
      )}
    </>
  );
};

export default App;
