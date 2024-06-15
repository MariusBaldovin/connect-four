import React from "react";

const Header = ({ currentPlayer, winner }) => {
  return (
    <div className="header mb-4">
      {winner ? (
        <h2 className="text-2xl font-bold text-green-500">{winner} wins!</h2>
      ) : (
        <h2 className="text-2xl font-bold">{currentPlayer}'s turn</h2>
      )}
    </div>
  );
};

export default Header;
