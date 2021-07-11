import React from "react";
import {
  Button,
  Container,
  Segment,
  Header,
  Statistic,
} from "semantic-ui-react";

const VideoCard = ({ videoTitle, videoID, videoViews, isQuestion }) => {
  let conditionalRender;

  if (isQuestion) {
    conditionalRender = <Statistic label="Views" value={videoViews} />;
  } else {
    conditionalRender = (
      <div>
        <Button.Group size="huge">
          <Button positive>More</Button>
          <Button.Or />
          <Button negative>Less</Button>
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

      <Segment>
        <h3>This video has</h3>
        {conditionalRender}
      </Segment>
    </Container>
  );
};

export default VideoCard;
