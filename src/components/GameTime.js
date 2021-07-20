import React from "react";
import { Container, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const GameTime = () => {
  return (
    <Container id="gtime-container" textAlign="center" fluid>
      <Header id="gtime-header" as="h1">
        Sorry. This part is still in development! Only classic mode is available
        for now.
      </Header>
      <Link to="/">
        <Button circular size="big" color="green" id="gover-buttons">
          Back To Menu
        </Button>
      </Link>
    </Container>
  );
};

export default GameTime;
