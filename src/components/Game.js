import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { Grid, Container, Segment, Divider } from "semantic-ui-react";
import getRandomTestVideo from "../utils/data/test_data";
import getVideoInfo from "../utils/get_youtube_video_info";

const Game = () => {
  const [leftVidTitle, setLeftVidTitle] = useState("");
  const [leftVidViews, setLeftVidViews] = useState("");
  const [leftVidID, setLeftVidID] = useState("");
  const [rightVidTitle, setRightVidTitle] = useState("");
  const [rightVidViews, setRightVidViews] = useState("");
  const [rightVidID, setRightVidID] = useState("");

  useEffect(() => {
    // Called when the component first mounts.
    // Loads the first two videos.

    const getVideoData = async () => {
      let firstVid = getRandomTestVideo();
      setLeftVidTitle(firstVid.videoTitle);
      setLeftVidID(firstVid.videoID);
      const firstVidInfo = await getVideoInfo(firstVid.videoID);
      setLeftVidViews(firstVidInfo.items[0].statistics.viewCount);

      let secondVid = getRandomTestVideo();
      while (secondVid.videoID === firstVid.videoID)
        secondVid = getRandomTestVideo();
      setRightVidTitle(secondVid.videoTitle);
      setRightVidID(secondVid.videoID);
      const secondVidInfo = await getVideoInfo(secondVid.videoID);
      setRightVidViews(secondVidInfo.items[0].statistics.viewCount);
    };

    getVideoData();
  }, []);

  const onAnswerSubmit = (answer) => {
    // answer is either 'more' or 'less'
    // The choice is made within the VideoCard component.
    if (answer === "more") {
      if (leftVidViews > rightVidViews) {
        console.log("Correct Answer!");
      } else {
        console.log("Wrong Answer!");
      }
    } else if (answer === "less") {
      if (leftVidViews < rightVidViews) {
        console.log("Correct Answer!");
      } else {
        console.log("Wrong Answer!");
      }
    }
  };

  return (
    <Container fluid>
      <div className="background"></div>
      <Segment id="videocards">
        <Grid columns={2}>
          <Divider vertical>
            <span id="game-vs">VS</span>
          </Divider>
          <Grid.Row>
            <Grid.Column>
              <VideoCard
                videoTitle={leftVidTitle}
                videoID={leftVidID}
                videoViews={leftVidViews}
                isQuestion={false}
              />
            </Grid.Column>
            <Grid.Column>
              <VideoCard
                videoTitle={rightVidTitle}
                videoID={rightVidID}
                videoViews={rightVidViews}
                isQuestion={true}
                onAnswerSubmit={onAnswerSubmit}
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
