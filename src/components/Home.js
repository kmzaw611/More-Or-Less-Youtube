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
    <Container textAlign="center" id="home-container">
      <Image centered src={title} size="large" />

      <Header as="h1" color="red" id="home-header">
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

      <Link to="/gametime">
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

      <Button
        as="a"
        href="mailto:kaungmyatzaw611@gmail.com"
        color="pink"
        size="small"
        compact
        circular
        basic
        id="home-button-mail"
      >
        <Icon name="mail" /> Email: kaungmyatzaw611@gmail.com
      </Button>
      <Button
        as="a"
        href="https://mypersonalwebsite.com"
        target="_blank"
        color="pink"
        size="small"
        compact
        circular
        basic
        id="home-button-website"
      >
        <Icon name="chrome" /> Website: mypersonalwebsite.com
      </Button>
      <br />

      <Button as="div" labelPosition="left" id="home-github">
        <Label basic color="red" pointing="right">
          Source Code
        </Label>
        <Button
          as="a"
          color="red"
          href="https://github.com/KyleKMZ/More-Or-Less-Youtube"
          target="_blank"
        >
          <Icon name="github" />
          GitHub
        </Button>
      </Button>
    </Container>
  );
};

export default Home;
