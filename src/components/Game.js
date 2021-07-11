import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import {
  Grid,
  Container,
  Message,
  Segment,
  Divider,
  Icon,
  Header,
} from "semantic-ui-react";

const Game = () => {
  return (
    <Container fluid>
      <Segment placeholder style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical>VS</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <VideoCard
                videoTitle='YOASOBI "Probably" Official Music Video'
                videoID="8iuLXODzL04"
                videoViews="35,707,214"
                isQuestion={true}
              />
            </Grid.Column>
            <Grid.Column>
              <VideoCard
                videoTitle='YOASOBI "Probably" Official Music Video'
                videoID="8iuLXODzL04"
                videoViews="35,707,214"
                isQuestion={false}
              />{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Message attached="bottom" header="Current Score: 0" />
    </Container>
  );
};

export default Game;
