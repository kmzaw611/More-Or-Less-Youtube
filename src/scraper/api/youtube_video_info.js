const axios = require("axios");
const KEY = require("./youtube_api_key");

module.exports = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/videos",
  params: {
    part: "snippet,contentDetails",
    type: "video",
    key: KEY,
  },
});
