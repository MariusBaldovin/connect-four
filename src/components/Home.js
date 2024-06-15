import React, { useState } from "react";

const Home = ({ startGame }) => {
  // keeping the state of rows, columns and the maximum token in a row to win
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(4);
  const [winLength, setWinLength] = useState(3);

  // Function to handle the submission of number of columns, rows and the maximum token in a row to win
  const handleSubmit = (e) => {
    e.preventDefault();
    startGame(rows, cols, winLength);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-8 space-y-4"
    >
      {/* Rows input field */}
      <label className="flex flex-col items-center text-xl">
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))} // on change updating the number of rows
          min="4"
          max="20"
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      {/* Columns input field */}
      <label className="flex flex-col items-center text-xl">
        Columns:
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))} // on change updating the number of columns
          min="4"
          max="20"
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      {/* Winning Length input field */}
      <label className="flex flex-col items-center text-xl">
        Winning Length:
        <input
          type="number"
          value={winLength}
          onChange={(e) => setWinLength(Number(e.target.value))} // on change updating the new value of number of tokens to win
          min="3"
          max={Math.min(rows, cols)} // error handling: not allowing more than minimum of rows and columns
          className="mt-1 p-2 border border-gray-300 rounded"
        />
      </label>
      {/* Submit button */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Start Game
      </button>
    </form>
  );
};

export default Home;
