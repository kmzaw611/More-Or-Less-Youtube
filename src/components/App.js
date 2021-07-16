import React from "react";
import Home from "./Home";
import Game from "./Game";
import GameOver from "./GameOver";
import GameTime from "./GameTime";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/gameover" component={GameOver} />
        <Route path="/gametime" component={GameTime} />
      </div>
    </Router>
  );
};

export default App;
