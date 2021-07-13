import React, { useState } from "react";
import { Segment } from "semantic-ui-react";

const IFrame = ({ videoID, videoTitle }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Segment compact raised loading={isLoading} id="iframe-segment">
      <iframe
        width="512"
        height="288"
        src={`https://www.youtube.com/embed/${videoID}?controls=0`}
        title={videoTitle}
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </Segment>
  );
};

export default IFrame;
