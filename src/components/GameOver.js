import React from "react";
import { Container, Header, Message, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const GameOver = (props) => {
  let conditionalScoreRender;
  let bgClass;
  let score = props.location.state.score || 0;

  if (score < 5) {
    conditionalScoreRender = (
      <Message id="gover-message">
        That's not a very good score...was this too hard? Maybe give it another
        try.
      </Message>
    );
    bgClass = "gover-bg-bad";
  } else if (score > 5 && score < 10) {
    conditionalScoreRender = (
      <Message id="gover-message">
        That was a pretty good attempt. Perhaps you could do better. Make the
        doggo proud.
      </Message>
    );
    bgClass = "gover-bg-avg";
  } else {
    conditionalScoreRender = (
      <Message id="gover-message">
        Woah...you rock! That's an excellent score. Hope you had fun playing!
      </Message>
    );
    bgClass = "gover-bg-gud";
  }

  return (
    <Container
      fluid
      className={bgClass}
      id="gover-container"
      textAlign="center"
    >
      <Header id="gover-header">You scored:</Header>
      <p id="gover-score">{score}</p>
      <div id="gover-message-blur">{conditionalScoreRender}</div>
      <Link to="/">
        <Button circular size="big" color="green" id="gover-buttons">
          Back To Menu
        </Button>
      </Link>
      <Link to="/game">
        <Button circular size="big" color="green" id="gover-buttons">
          Play Again
        </Button>
      </Link>
    </Container>
  );
};

export default GameOver;
