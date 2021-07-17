import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
  params: {
    part: "snippet,contentDetails,statistics",
    type: "video",
    key: KEY,
  },
});
