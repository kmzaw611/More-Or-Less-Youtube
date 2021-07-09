import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Game = () => {
  return (
    <div>
      <h1>Game</h1>
      <Link to="/">
        <Button content="Back To Home" />
      </Link>
    </div>
  );
};

export default Game;
