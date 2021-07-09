import React from "react";
import Home from "./Home";
import Game from "./Game";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
  );
};

export default App;
