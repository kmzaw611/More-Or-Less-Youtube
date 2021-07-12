import React from "react";

const IFrame = ({ videoID, videoTitle }) => {
  return (
    <div>
      <iframe
        width="512"
        height="288"
        src={`https://www.youtube.com/embed/${videoID}?controls=0`}
        title={videoTitle}
      ></iframe>
    </div>
  );
};

export default IFrame;
