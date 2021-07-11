import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Grid, Container, Message, Segment, Divider } from "semantic-ui-react";

const Game = () => {
  return (
    <Container fluid>
      <Segment
        placeholder
        style={{
          height: "90vh",
          paddingTop: 50,
          paddingBottom: 50,
          marginBottom: 0,
        }}
      >
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
      <Segment
        inverted
        style={{ height: "10vh", marginTop: 0, borderRadius: 0 }}
      >
        <h3 style={{ float: "left" }}>Mode: Classic Mode</h3>
        <h3 style={{ float: "right" }}>Current Score: 0</h3>
      </Segment>
    </Container>
  );
};

export default Game;
