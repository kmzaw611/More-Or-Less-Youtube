import generateRandomWord from "./random";
import youtube from "../api/youtube";

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
  const term = generateRandomWord();
  const videoID = getVideoIDFromTerm(term);
  return videoID;
};

const getVideoFromYoutuber = () => {
  // A list of the top 50 most subscribed channels with some additions of my own.
  const youtubersList = [
    "T-Series",
    "Cocomelon",
    "PewDiePie",
    "SET India",
    "Kids Diana Show",
    "WWE",
    "Like Nastya",
    "Zee Music Company",
    "5-Minute Crafts",
    "Vlad and Niki",
    "Canal KondZilla",
    "MrBeast",
    "Justin Bieber",
    "Blackpink",
    "Zee TV",
    "HYPE LABELS",
    "Dude Perfect",
    "Goldmines Telefilms",
    "Marsmhello",
    "Shemaroo Filmi Gaane",
    "Movieclips",
    "Sony SAB",
    "BangtanTV",
    "Pinkfong",
    "ChuChu TV",
    "Ariana Grande",
    "EminemMusic",
    "Ed Sheeran",
    "Aaj Tak",
    "Wave Music",
    "Badabun",
    "Sony Music India",
    "LooLoo Kids",
    "JuegaGerman",
    "El Reino Infantil",
    "Tips Official",
    "Taylor Swift",
    "HolaSoyGerman",
    "whinderssonnunes",
    "Felipe Neto",
    "Fernanfloo",
    "Billie Ellish",
    "Colors TV",
    "BRIGHT SIDE",
    "Katy Perry",
    "Voce Sabia",
    "YRF",
    "elrubiusOMG",
    "Alan Walker",
    "videogamedunkey",
    "Joseph Anderson",
    "Lemmino",
  ];

  // Get a random youtuber for the search term
  const term = youtubersList[Math.floor(Math.random() * youtubersList.length)];
  const videoID = getVideoIDFromTerm(term);
  return videoID;
};

const getVideoFromGoogleSearch = () => {};

// Randomly select one of the above three methods and use it to return a video.
const getRandomVideo = () => {};

const videoFunctions = {
  getVideoFromRandomWord,
  getVideoFromYoutuber,
};
export default videoFunctions;
