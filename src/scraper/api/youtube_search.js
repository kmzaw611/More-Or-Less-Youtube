const axios = require("axios");
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

module.exports = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
  },
});
