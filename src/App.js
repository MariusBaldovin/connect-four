import React, { useCallback } from "react";
import Home from "./components/Home";

const App = () => {
  const startGame = useCallback((rows, cols, winLength) => {
    console.log(
      `Starting game with rows: ${rows}, cols: ${cols}, winLength: ${winLength}`
    );
  }, []);

  return (
    <>
      <div className=" mt-10 text-4xl text-center font-extrabold text-slate-900">
        CONNECT FOUR GAME
      </div>
      <Home startGame={startGame} />
    </>
  );
};

export default App;
