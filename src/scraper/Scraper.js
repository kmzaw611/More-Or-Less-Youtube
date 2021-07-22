/*
LIMITATIONS
------------
Youtube API Daily Quota: 10,000 Units
Search Cost: 100 units
Video Info Cost: 1 unit

METHOD
-------
3 ways to scrape for random videos:
(1) Using Google Trends for the past 3 years (2018-2020).
(2) Using a list of top-50 most subscribed youtubers with some personal additions.
(3) Using random word generation.

To stay within daily API quota limit, running the scraper program will only do:
(1) 75 searches (7500 Units)
(2) Look up video info for each search result (25 x 75 = 1875 units)
(3) Check whether each video is already stored in the Firestore
(4) Only scrape and add the video if it's unique

This will scrape 1875 videos each day (if there are no duplicates), while staying
under Google's API limit. Check out src/scraper/script.js for the implementation.

MISC
-----
This method is heavily based on several of the methods and functions in the utils folder, which
I used earlier for developing and testing the frontend.
*/

const googleTrendsList = require("./data/google_trends");
const youtubersList = require("./data/youtubers");
const randomWords = require("random-words");
const youtube_search = require("./api/youtube_search");
const youtube_video_info = require("./api/youtube_video_info");
const firestore = require("./api/firestore");

class Scraper {
  constructor() {
    this.google_trend_term =
      googleTrendsList[Math.floor(Math.random() * googleTrendsList.length)];
    this.youtuber_term =
      youtubersList[Math.floor(Math.random() * youtubersList.length)];
    this.random_word = this.generateRandomWord();
    this.chosen_term = this.chooseTerm();
    this.firestore_db = firestore;
  }

  generateRandomWord() {
    const word = randomWords();
    return word;
  }

  chooseTerm() {
    let roll = Math.floor(Math.random() * 3);
    switch (roll) {
      case 0:
        return this.google_trend_term;
      case 1:
        return this.youtuber_term;
      case 2:
        return this.random_word;
      default:
        // Something is very wrong here
        console.log("Something is very wrong here!");
    }
  }

  getChosenTerm() {
    return this.chosen_term;
  }

  async getVideoInfo(videoID) {
    const { data } = await youtube_video_info.get("", {
      params: {
        id: videoID,
      },
    });

    return data;
  }

  async addToFirestore(videoID) {
    // Scrape each videoID's information and store them in Firestore.
    // First check if videoID to add is unique; add only if it is.

    const videosRef = firestore.collection("videos");
    const duplicateSnapshot = await videosRef
      .where("videoID", "==", videoID)
      .get();

    if (!duplicateSnapshot.empty) {
      console.log("Duplicate => ", videoID);
      return;
    } else {
      const videoInfo = await this.getVideoInfo(videoID);
      console.log(
        "Scraping => " +
          videoID +
          "; Title => " +
          videoInfo.items[0].snippet.title
      );
      videosRef.add({
        videoID,
        videoChannel: videoInfo.items[0].snippet.channelTitle,
        videoTitle: videoInfo.items[0].snippet.title,
      });
    }
  }

  // Scrape the Youtube API using the chosen term and return a list of unique IDs
  // not in the Firestore database.
  async scrapeYoutubeAPI() {
    // To avoid bias for recent videos, I randomly select a one-year time period
    // in the last 5 years for doing searches.
    // index 0 => publishedAfter; index 1 => publishedBefore
    const publishedDateParams = [
      ["2021-01-01T00:00:00Z", new Date().toISOString()],
      ["2020-01-01T00:00:00Z", "2021-01-01T00:00:00Z"],
      ["2019-01-01T00:00:00Z", "2020-01-01T00:00:00Z"],
      ["2018-01-01T00:00:00Z", "2019-01-01T00:00:00Z"],
      ["2017-01-01T00:00:00Z", "2018-01-01T00:00:00Z"],
      ["2010-01-01T00:00:00Z", "2017-01-01T00:00:00Z"],
    ];

    const publishedDate =
      publishedDateParams[
        Math.floor(Math.random() * publishedDateParams.length)
      ];
    const publishedAfter = publishedDate[0];
    const publishedBefore = publishedDate[1];

    // Search Youtube using the API and get a list of videoIDs
    const { data } = await youtube_search.get("", {
      params: {
        q: this.chosen_term,
        publishedAfter: publishedAfter,
        publishedBefore: publishedBefore,
      },
    });
    const videoIDs = [];
    data.items.forEach((videoItem) => {
      videoIDs.push(videoItem.id.videoId);
    });

    for (const videoID of videoIDs) {
      await this.addToFirestore(videoID);
    }
  }

  async getNumOfVideos() {
    const videosRef = firestore.collection("videos");
    const snapshot = await videosRef.get();
    console.log(snapshot.size);
  }
}

module.exports = Scraper;
