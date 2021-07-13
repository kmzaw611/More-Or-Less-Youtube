import axios from "axios";

const KEY = "AIzaSyA_Zyxw2jeKTrbdV8fRkAE6bsMMFVX6rhA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
