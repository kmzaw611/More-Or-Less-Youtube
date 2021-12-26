const axios = require("axios");
const KEY = require("./youtube_api_key");

module.exports = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
  },
});
