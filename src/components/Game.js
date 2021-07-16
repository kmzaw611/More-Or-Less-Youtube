import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import {
  Grid,
  Container,
  Segment,
  Divider,
  Transition,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import getRandomTestVideo from "../utils/data/test_data";
import getVideoInfo from "../utils/get_youtube_video_info";

const Game = () => {
  const [leftVidTitle, setLeftVidTitle] = useState("");
  const [leftVidViews, setLeftVidViews] = useState(0);
  const [leftVidID, setLeftVidID] = useState("");
  const [rightVidTitle, setRightVidTitle] = useState("");
  const [rightVidViews, setRightVidViews] = useState(0);
  const [rightVidID, setRightVidID] = useState("");
  const [isQuestion, setIsQuestion] = useState(true);
  const [score, setScore] = useState(0);
  const [visibleScore, setVisibleScore] = useState(true);
  const [result, setResult] = useState("");
  const [visibleResult, setVisibleResult] = useState(false);
  const [dimmerActive, setDimmerActive] = useState(false);

  // This async function gets two random videos from the database for every new round
  // and updates state values appropriately to update the web page.
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

  useEffect(() => {
    // Called when the component first mounts.
    // Loads the first two videos.
    getVideoData();
  }, []);

  const OnCorrectAnswerSubmit = async () => {
    setIsQuestion(false);
    // Animation time for view count number
    setTimeout(() => {
      setResult("Correct!");
      setVisibleResult(true);
      setScore(score + 1);
      setVisibleScore(!visibleScore);
    }, 1000);

    setTimeout(async () => {
      // Load two new videos
      setIsQuestion(true);
      setVisibleResult(false);
      setDimmerActive(true);
      await getVideoData();
      setDimmerActive(false);
    }, 2000);
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
      <Dimmer.Dimmable blurring as={Segment} id="videocards">
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

        <Dimmer active={dimmerActive}>
          <Loader size="large">Loading Videos</Loader>
        </Dimmer>
      </Dimmer.Dimmable>
      <Segment inverted id="game-bottom-segment">
        <span id="game-bottom-left-text">Mode: Classic Mode</span>

        {visibleResult ? (
          <span id="game-bottom-center-text">{result}</span>
        ) : null}

        <Transition animation="bounce" duration={500} visible={visibleScore}>
          <span id="game-bottom-right-text">Current Score: {score}</span>
        </Transition>
      </Segment>
    </Container>
  );
};

export default Game;
