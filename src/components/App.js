import React from "react";
import Home from "./Home";
import Game from "./Game";
import GameOver from "./GameOver";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/gameover" component={GameOver} />
      </div>
    </Router>
  );
};

export default App;
