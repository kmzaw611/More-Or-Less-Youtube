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
import title from "../images/title.png";

const Home = () => {
  return (
    <Container textAlign="center" style={{ paddingTop: "50px" }}>
      <Image centered src={title} size="large" />
      <Header as="h2" color="red" style={{ marginBottom: "30px" }}>
        <Icon name="youtube play" />
        Which Youtube video has more views?
      </Header>
      <Button
        basic
        circular
        icon
        size="large"
        labelPosition="right"
        color="pink"
      >
        <Icon name="chevron right" />
        Classic Mode
      </Button>
      <Divider />
      <Button
        basic
        circular
        icon
        size="large"
        labelPosition="right"
        color="pink"
      >
        Time Trial Mode
        <Icon name="chevron right " />
      </Button>
      <Divider />
      <Button as="div" labelPosition="left" style={{ marginTop: "30px" }}>
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
