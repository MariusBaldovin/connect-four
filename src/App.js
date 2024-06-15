import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import Board from "./components/Board";
import Header from "./components/WinnerMessage";

const App = () => {
  const [rows, setRows] = useState(4); //no of rows
  const [cols, setCols] = useState(4); //no of columns
  const [winLength, setWinLength] = useState(3); //no of tokens in a row to win
  const [currentPlayer, setCurrentPlayer] = useState("Red"); //current player by default starts with red player
  const [grid, setGrid] = useState(
    Array(6)
      .fill()
      .map(() => Array(7).fill(" "))
  ); // the grid with cols and rows based on user input
  const [hoverRow, setHoverRow] = useState(null); // state to track hover over the row
  const [hoverCol, setHoverCol] = useState(null); // state to track hover over the column
  const [winner, setWinner] = useState(null); //winner state
  const [gameStarted, setGameStarted] = useState(false); //state to check if the game has started or not

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
    //checking if there is a winner
    if (checkWinner(newGrid, row, col, currentPlayer)) {
      setWinner(currentPlayer);
    } else {
      switchPlayer(); //if no winner switch to he next player
    }
  };

  //function to check if the current player is the winner
  const checkWinner = (grid, row, col, player) => {
    return (
      checkDirection(grid, row, col, player, 1, 0) || // checking on the horizontal
      checkDirection(grid, row, col, player, 0, 1) || // checking on the ertical
      checkDirection(grid, row, col, player, 1, 1) || //checking on 1st diagonal
      checkDirection(grid, row, col, player, 1, -1) // checking on the 2nd diagonal
    );
  };

  // function to check for a win in a particular direction (horizontal, vertical or diagonal)
  const checkDirection = (grid, row, col, player, rowStep, colStep) => {
    let count = 1;

    //checking forward direction
    for (let step = 1; step < winLength; step++) {
      const r = row + step * rowStep;
      const c = col + step * colStep;
      if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === player) {
        count++;
      } else {
        break;
      }
    }
    //checking backward direction
    for (let step = 1; step < winLength; step++) {
      const r = row - step * rowStep;
      const c = col - step * colStep;
      if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === player) {
        count++;
      } else {
        break;
      }
    }
    return count >= winLength; //returning true only if the count is greater than the numbers of tokens to win
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-10 mb-12 text-4xl text-center font-extrabold text-slate-900">
        CONNECT FOUR GAME
      </div>
      {gameStarted ? (
        <>
          <Header currentPlayer={currentPlayer} winner={winner} />
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
    </div>
  );
};

export default App;
