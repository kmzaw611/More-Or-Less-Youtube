import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Grid, Container, Message, Segment, Divider } from "semantic-ui-react";

const Game = () => {
  return (
    <Container fluid>
      <Segment
        style={{
          height: "93vh",
          marginBottom: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
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
      <Segment
        inverted
        style={{ height: "7vh", marginTop: 0, borderRadius: 0 }}
      >
        <span style={{ fontWeight: "bold", fontSize: 20 }}>
          Mode: Classic Mode
        </span>
        <span style={{ fontWeight: "bold", fontSize: 20, float: "right" }}>
          Current Score: 0
        </span>
      </Segment>
    </Container>
  );
};

export default Game;
