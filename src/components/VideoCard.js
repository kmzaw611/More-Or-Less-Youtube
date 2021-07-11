import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Table,
} from "semantic-ui-react";

const VideoCard = ({ videoTitle, videoID, videoViews, isQuestion }) => {
  let conditionalRender;

  if (isQuestion) {
    conditionalRender = (
      <div>
        <h3>This video has {videoViews} views.</h3>
      </div>
    );
  } else {
    conditionalRender = (
      <div>
        <h3>This video has</h3>
        <Button.Group>
          <Button positive size="large">
            More
          </Button>
          <Button.Or />
          <Button negative size="large">
            Less
          </Button>
        </Button.Group>
        <h3>views.</h3>
      </div>
    );
  }

  return (
    <Container textAlign="center">
      <Header as="h3">{videoTitle}</Header>
      <iframe
        width="512"
        height="288"
        src={`https://www.youtube.com/embed/${videoID}?controls=0`}
        title={videoTitle}
      ></iframe>

      {conditionalRender}
    </Container>
  );
};

export default VideoCard;
