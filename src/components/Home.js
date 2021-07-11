import React from "react";
import {
  Container,
  Header,
  Image,
  Icon,
  Button,
  Divider,
  Label,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import title from "../assets/images/title.png";

const Home = () => {
  return (
    <Container textAlign="center" style={{ paddingTop: "50px" }}>
      <Image centered src={title} size="large" />

      <Header
        as="h2"
        color="red"
        style={{ marginBottom: "30px", fontFamily: "Montserrat" }}
      >
        <Icon name="youtube play" />
        Which Youtube video has more views?
      </Header>

      <Link to="/game">
        <Button basic circular size="large" color="pink" animated>
          <Button.Content icon visible>
            Classic Mode
            <Icon name="angle double right" />
          </Button.Content>
          <Button.Content icon hidden centered>
            <Icon name="play" />
          </Button.Content>
        </Button>
      </Link>

      <Divider />

      <Link to="/game">
        <Button basic circular size="large" color="pink" animated>
          <Button.Content icon visible>
            Time Trial Mode
            <Icon name="angle double right" />
          </Button.Content>
          <Button.Content icon hidden centered>
            <Icon name="clock" />
          </Button.Content>
        </Button>
      </Link>

      <Divider />

      <Button as="div" labelPosition="left" style={{ marginTop: "50px" }}>
        <Label basic color="red" pointing="right">
          Source Code
        </Label>
        <Button as="a" color="red">
          <Icon name="github" />
          GitHub
        </Button>
      </Button>
    </Container>
  );
};

export default Home;
