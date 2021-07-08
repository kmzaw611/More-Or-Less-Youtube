import youtube from "../api/youtube";
import generateRandomWord from "./random";
import youtubersList from "./data/youtubers_list";
import googleTrends from "./data/google_trends";

// Currently implementing three ways to get videos. Each has a equal chance to get selected.
// (1) Getting a random video from a randomly selected top-50 youtuber with some additions of my own.
// (2) Getting a random video by using a random word generator.
// (3) Getting a random video from a randomly selected top Google search term.
// All functions return a videoID that will later be rendered in React components.

const getVideoIDFromTerm = async (term) => {
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

const getVideoFromRandomWord = async () => {
  console.log("RANDOM_WORD");
  const term = generateRandomWord();
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

const getVideoFromYoutuber = async () => {
  console.log("YOUTUBER");
  const term = youtubersList[Math.floor(Math.random() * youtubersList.length)];
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

const getVideoFromGoogleTrends = async () => {
  console.log("GOOGLE_TRENDS");
  const term = googleTrends[Math.floor(Math.random() * googleTrends.length)];
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

// Randomly select one of the above three methods and use it to return a video.
const getRandomVideo = async () => {
  const num = Math.floor(Math.random() * 3);
  let videoID;
  switch (num) {
    case 0:
      videoID = await getVideoFromRandomWord();
      break;
    case 1:
      videoID = await getVideoFromYoutuber();
      break;
    case 2:
      videoID = await getVideoFromGoogleTrends();
      break;
    default:
  }
  return videoID;
};

export default getRandomVideo;
