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
        <Statistic.Label>VIEWS</Statistic.Label>
      </Statistic>
    );
  } else {
    conditionalRender = (
      <div>
        <Button.Group size="huge">
          <Button positive>More</Button>
          <Button.Or />
          <Button negative>Less</Button>
        </Button.Group>
        <h4 style={{ marginTop: 5 }}>VIEWS</h4>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h2" style={{ fontFamily: "Lato light" }}>
        {videoTitle}
      </Header>

      {/* <iframe
        width="512"
        height="288"
        src={`https://www.youtube.com/embed/${videoID}?controls=0`}
        title={videoTitle}
      ></iframe> */}

      <IFrame videoID={videoID} videoTitle={videoTitle} />

      <Segment>
        <h3 style={{ fontFamily: "Merriweather" }}>This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
