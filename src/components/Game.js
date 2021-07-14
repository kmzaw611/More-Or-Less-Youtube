import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Grid, Container, Segment, Divider } from "semantic-ui-react";
import getRandomTestVideo from "../utils/data/test_data";
import getVideoInfo from "../utils/get_youtube_video_info";

const Game = () => {
  const [isQuestion, setIsQuestion] = useState(true);
  const [leftVidTitle, setLeftVidTitle] = useState("");
  const [leftVidViews, setLeftVidViews] = useState(0);
  const [leftVidID, setLeftVidID] = useState("");
  const [rightVidTitle, setRightVidTitle] = useState("");
  const [rightVidViews, setRightVidViews] = useState(0);
  const [rightVidID, setRightVidID] = useState("");

  useEffect(() => {
    // Called when the component first mounts.
    // Loads the first two videos.

    const getVideoData = async () => {
      let firstVid = getRandomTestVideo();
      setLeftVidTitle(firstVid.videoTitle);
      setLeftVidID(firstVid.videoID);
      const firstVidInfo = await getVideoInfo(firstVid.videoID);
      setLeftVidViews(parseInt(firstVidInfo.items[0].statistics.viewCount));

      let secondVid = getRandomTestVideo();
      while (secondVid.videoID === firstVid.videoID)
        secondVid = getRandomTestVideo();
      setRightVidTitle(secondVid.videoTitle);
      setRightVidID(secondVid.videoID);
      const secondVidInfo = await getVideoInfo(secondVid.videoID);
      setRightVidViews(parseInt(secondVidInfo.items[0].statistics.viewCount));
    };

    getVideoData();
  }, []);

  const OnCorrectAnswerSubmit = async () => {
    // THINGS THAT NEED TO HAPPEN
    // (0) Some sort of correct signal
    // (1) The right vid transitions to the left side of the page
    // (2) Left vid becomes right vid
    // (3) New right vid is generated and transitioned in from the right side of the page
    // (4) Score update

    setIsQuestion(false);
  };

  const OnWrongAnswerSubmit = () => {};

  const onAnswerSubmit = (answer) => {
    // answer is either 'more' or 'less'
    // The choice is made within the VideoCard component.

    if (answer === "more") {
      if (rightVidViews > leftVidViews) {
        OnCorrectAnswerSubmit();
      } else {
        OnWrongAnswerSubmit();
      }
    } else if (answer === "less") {
      if (rightVidViews < leftVidViews) {
        OnCorrectAnswerSubmit();
      } else {
        OnWrongAnswerSubmit();
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
                isQuestion={isQuestion}
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
