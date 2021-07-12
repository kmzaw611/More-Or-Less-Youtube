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
      <Statistic style={{ marginTop: 0 }}>
        <Statistic.Value>{videoViews}</Statistic.Value>
        <Statistic.Label id="vidcard-views">VIEWS</Statistic.Label>
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
        <h4 id="vidcard-views">VIEWS</h4>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h2" style={{ fontFamily: "Lato light" }}>
        {videoTitle}
      </Header>

      <IFrame videoID={videoID} videoTitle={videoTitle} />

      <Segment>
        <h3 style={{ fontFamily: "Merriweather" }}>This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
