import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import firestore from "./Firestore";
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
import { Redirect } from "react-router";
import shorten_title from "../utils/shorten_title";
import getVideoInfo from "../utils/get_youtube_video_info";
import correct_audio from "../assets/audio/correct_se.mp3";
import wrong_audio from "../assets/audio/wrong_se.mp3";

const Game = () => {
  // The '*'s are placeholders until the title and channel name loads.
  // Otherwise, the IFrames move awkwardly if internet is slow.
  const [leftVidTitle, setLeftVidTitle] = useState(
    "******************************"
  );
  const [leftVidChannel, setLeftVidChannel] = useState("**********");
  const [leftVidViews, setLeftVidViews] = useState(0);
  const [leftVidID, setLeftVidID] = useState("");
  const [rightVidTitle, setRightVidTitle] = useState(
    "******************************"
  );
  const [rightVidChannel, setRightVidChannel] = useState("**********");
  const [rightVidViews, setRightVidViews] = useState(0);
  const [rightVidID, setRightVidID] = useState("");
  const [isQuestion, setIsQuestion] = useState(true);
  const [score, setScore] = useState(0);
  const [visibleScore, setVisibleScore] = useState(true);
  const [result, setResult] = useState("");
  const [visibleResult, setVisibleResult] = useState(false);
  const [dimmerActive, setDimmerActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const correct_se = new Audio(correct_audio);
  correct_se.volume = 0.3;
  const wrong_se = new Audio(wrong_audio);
  wrong_se.volume = 0.3;

  // Dan McGrath's method with generated auto-IDs is what I'm using to get random videos. Source below:
  // https://stackoverflow.com/questions/46798981/firestore-how-to-get-random-documents-in-a-collection
  // Also big thanks to ajzbc's sample code in the same thread.
  const getRandomVideo = async () => {
    let videosRef = firestore.collection("videos");
    let randomID = videosRef.doc().id;
    let snapshot = await videosRef
      .where(firebase.firestore.FieldPath.documentId(), ">=", randomID)
      .limit(1)
      .get();
    if (snapshot.size === 0) {
      snapshot = await videosRef
        .where(firebase.firestore.FieldPath.documentId(), "<", randomID)
        .limit(1)
        .get();
    }

    let videoData;
    snapshot.forEach((video) => (videoData = video.data()));
    return videoData;
  };

  // This async function gets two random videos from the database for every new round
  // and updates state values appropriately to update the web page.
  const getVideoData = async () => {
    setDimmerActive(true);
    let firstVid = await getRandomVideo();
    let secondVid = await getRandomVideo();

    setLeftVidTitle(shorten_title(firstVid.videoTitle));
    setLeftVidID(firstVid.videoID);
    setLeftVidChannel(firstVid.videoChannel);
    const firstVidInfo = await getVideoInfo(firstVid.videoID);
    setLeftVidViews(parseInt(firstVidInfo.items[0].statistics.viewCount));

    while (secondVid.videoID === firstVid.videoID) secondVid = getRandomVideo();
    setRightVidTitle(shorten_title(secondVid.videoTitle));
    setRightVidID(secondVid.videoID);
    setRightVidChannel(secondVid.videoChannel);
    const secondVidInfo = await getVideoInfo(secondVid.videoID);
    setRightVidViews(parseInt(secondVidInfo.items[0].statistics.viewCount));
    setDimmerActive(false);
  };

  useEffect(() => {
    // Called when the component first mounts.
    // Loads the first two videos.
    getVideoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OnCorrectAnswerSubmit = async () => {
    setIsQuestion(false);
    // Animation time for view count number
    setTimeout(() => {
      setResult("Correct!");
      setVisibleResult(true);
      setScore(score + 1);
      setVisibleScore(!visibleScore);
      correct_se.play();
    }, 1000);

    setTimeout(async () => {
      // Load two new videos
      setIsQuestion(true);
      setVisibleResult(false);
      await getVideoData();
    }, 2000);
  };

  const OnWrongAnswerSubmit = () => {
    setIsQuestion(false);
    // Animation time for view count number
    setTimeout(() => {
      setResult("Wrong!");
      setVisibleResult(true);
      wrong_se.play();
    }, 1000);

    setTimeout(() => {
      setGameOver(true);
    }, 2000);
  };

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

  if (gameOver) {
    return <Redirect to={{ pathname: "/gameover", state: { score: score } }} />;
  }

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
                videoChannel={leftVidChannel}
                videoID={leftVidID}
                videoViews={leftVidViews}
                isQuestion={false}
              />
            </Grid.Column>
            <Grid.Column>
              <VideoCard
                videoTitle={rightVidTitle}
                videoChannel={rightVidChannel}
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
          result === "Correct!" ? (
            <span id="game-bottom-center-text-correct">{result}</span>
          ) : (
            <span id="game-bottom-center-text-wrong">{result}</span>
          )
        ) : null}

        <Transition animation="bounce" duration={500} visible={visibleScore}>
          <span id="game-bottom-right-text">Current Score: {score}</span>
        </Transition>
      </Segment>
    </Container>
  );
};

export default Game;
