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

export const getVideoFromRandomWord = async () => {
  const term = generateRandomWord();
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

export const getVideoFromYoutuber = async () => {
  // Get a random youtuber for the search term
  const term = youtubersList[Math.floor(Math.random() * youtubersList.length)];
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

export const getVideoFromGoogleTrends = async () => {
  const term = googleTrends[Math.floor(Math.random() * googleTrends.length)];
  const videoID = await getVideoIDFromTerm(term);
  return videoID;
};

// Randomly select one of the above three methods and use it to return a video.
export const getRandomVideo = () => {};
