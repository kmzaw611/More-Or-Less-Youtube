import React, { useEffect } from "react";
import {
  getVideoFromRandomWord,
  getVideoFromYoutuber,
  getVideoFromGoogleTrends,
} from "../utils/youtube_video";

const App = () => {
  useEffect(() => {
    const getVideoID = async () => {
      const videoID = await getVideoFromGoogleTrends();
      console.log(videoID);
    };

    getVideoID();
  }, []);

  return (
    <div>
      <h1>Above Or Below - Youtube</h1>
    </div>
  );
};

export default App;
