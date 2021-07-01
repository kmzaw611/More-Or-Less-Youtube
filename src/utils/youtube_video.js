import generateRandomWord from "./random";
import youtube from "../api/youtube";

// Currently implementing three ways to get videos. Each has a equal chance to get selected.
// (1) Getting a random video from a randomly selected top-100 youtuber.
// (2) Getting a random video by using a random word generator.
// (3) Getting a random video from a randomly selected top Google search term.
// All functions return a videoID that will later be rendered in React components.

const getVideoFromRandomWord = async () => {
  const term = generateRandomWord();
  const { data } = await youtube.get(
    "https://youtube.googleapis.com/youtube/v3/search",
    {
      params: {
        q: term,
      },
    }
  );

  // Pick a random video from the search results
  const videos = data.items;
  const video = videos[Math.floor(Math.random() * videos.length)];

  return video.id.videoId;
};

const getVideoFromYoutuber = () => {};

const getVideoFromGoogleSearch = () => {};

// Randomly select one of the above three methods and use it to return a video.
const getRandomVideo = () => {};

export default getVideoFromRandomWord;
