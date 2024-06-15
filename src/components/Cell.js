import React from "react";
import red from "../assets/red.svg";
import yellow from "../assets/yellow.svg";

const Cell = ({ value, onClick, onMouseEnter, isHovering, currentPlayer }) => {
  return (
    <div
      className={`cell w-28 h-28 border border-gray-400 flex justify-center items-center text-2xl cursor-pointer hover:bg-slate-200`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {value === "Red" && <img src={red} alt="red ball" />}
      {value === "Yellow" && <img src={yellow} alt="yellow ball" />}
      {isHovering &&
        !value &&
        (currentPlayer === "Red" ? (
          <img src={red} alt="red ball" />
        ) : (
          <img src={yellow} alt="yellow ball" />
        ))}
    </div>
  );
};

export default Cell;
