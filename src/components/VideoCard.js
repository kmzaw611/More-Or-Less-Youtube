import React from "react";
import {
  Button,
  Container,
  Segment,
  Header,
  Statistic,
} from "semantic-ui-react";
import CountUp from "react-countup";
import IFrame from "./IFrame";

const VideoCard = ({
  videoTitle,
  videoChannel,
  videoID,
  videoViews,
  isQuestion,
  onAnswerSubmit,
}) => {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  let conditionalRender;

  if (!isQuestion) {
    conditionalRender = (
      <Statistic id="vidcard-viewcount">
        <Statistic.Value id="vidcard-value">
          <CountUp
            end={videoViews}
            duration={1}
            formattingFn={numberWithCommas}
            useEasing={true}
          />
          {/* {numberWithCommas(videoViews)} */}
        </Statistic.Value>
        <Statistic.Label id="vidcard-text">VIEWS</Statistic.Label>
      </Statistic>
    );
  } else {
    conditionalRender = (
      <div id="vidcard-buttons">
        <Button
          onClick={() => onAnswerSubmit("more")}
          id="vidcard-button-positive"
          basic
          compact
          size="big"
          color="red"
        >
          More
        </Button>
        <Button
          onClick={() => onAnswerSubmit("less")}
          id="vidcard-button-negative"
          basic
          compact
          size="big"
          color="red"
        >
          Less
        </Button>
        <h4 id="vidcard-text">VIEWS</h4>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h2" id="vidcard-title">
        {videoTitle}
      </Header>
      <Header as="h4" id="vidcard-channel">
        {videoChannel}
      </Header>

      <IFrame videoID={videoID} videoTitle={videoTitle} />

      <Segment id="vidcard-segment" raised>
        <h3 id="vidcard-text">This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
