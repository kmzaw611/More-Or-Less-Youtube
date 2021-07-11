import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Grid, Container, Segment, Divider } from "semantic-ui-react";

const Game = () => {
  return (
    <Container fluid>
      <div className="background"></div>
      <Segment id="videocards">
        <Grid columns={2}>
          <Divider vertical>VS</Divider>
          <Grid.Row>
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
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment inverted id="game-bottom-segment">
        <span id="game-bottom-left-text">Mode: Classic Mode</span>
        <span id="game-bottom-right-text">Current Score: 0</span>
      </Segment>
    </Container>
  );
};

export default Game;
