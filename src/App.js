import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import Board from "./components/Board";

const App = () => {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [winLength, setWinLength] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("Red");
  const [grid, setGrid] = useState(
    Array(6)
      .fill()
      .map(() => Array(7).fill(" "))
  );
  const [hoverRow, setHoverRow] = useState(null); // state to track hover over the row
  const [hoverCol, setHoverCol] = useState(null); // state to track hover over the column
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

  //callback funcion to exit the game and return to Home
  const exitGame = useCallback(() => {
    setGameStarted(false);
  }, []);

  //function to swith from red to yellow player and vice versa
  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red");
  };

  //function to drop the token to the cell where the user clicks
  const dropToken = (row, col) => {
    if (winner || grid[row][col] !== " ") return;
    const newGrid = [...grid];
    newGrid[row][col] = currentPlayer;
    setGrid(newGrid);

    switchPlayer();
  };

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
            dropToken={dropToken}
            currentPlayer={currentPlayer}
            exitGame={exitGame}
          />
        </>
      ) : (
        <Home startGame={startGame} />
      )}
    </>
  );
};

export default App;
