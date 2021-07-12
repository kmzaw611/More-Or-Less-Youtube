import React from "react";
import {
  Button,
  Container,
  Segment,
  Header,
  Statistic,
} from "semantic-ui-react";
import IFrame from "./IFrame";

const VideoCard = ({ videoTitle, videoID, videoViews, isQuestion }) => {
  let conditionalRender;

  if (isQuestion) {
    conditionalRender = (
      <Statistic id="vidcard-viewcount">
        <Statistic.Value>{videoViews}</Statistic.Value>
        <Statistic.Label id="vidcard-text">VIEWS</Statistic.Label>
      </Statistic>
    );
  } else {
    conditionalRender = (
      <div>
        <Button.Group fluid size="huge">
          <Button basic positive>
            More
          </Button>
          <Button.Or />
          <Button basic negative>
            Less
          </Button>
        </Button.Group>
        <h4 id="vidcard-text">VIEWS</h4>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h2" id="vidcard-title">
        {videoTitle}
      </Header>

      <IFrame videoID={videoID} videoTitle={videoTitle} />

      <Segment>
        <h3 id="vidcard-text">This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
