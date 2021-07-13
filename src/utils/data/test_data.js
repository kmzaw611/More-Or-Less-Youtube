const test_data = [
  {
    videoTitle: "廻廻奇譚 - Eve MV",
    videoChannel: "Eve",
    videoID: "1tk1pqwrOys",
  },
  {
    videoTitle: '"Lilac" - 美波 (Minami) MV',
    videoChannel: "Minami",
    videoID: "GQ3V50XoLOM",
  },
  {
    videoTitle: "Tik Toks That Makes You Wanna Uninstall",
    videoChannel: "PewDiePie",
    videoID: "kgzjX2H9zTQ",
  },
  {
    videoTitle: "Moist Meter | Black Widow",
    videoChannel: "penguinz0",
    videoID: "1Zr4_CmWtqI",
  },
  {
    videoTitle: "1,000km Cable to the Stars - The Skyhook",
    videoChannel: "Kurzgesagt – In a Nutshell",
    videoID: "dqwpQarrDwk",
  },
];

const getRandomTestVideo = () => {
  const video = test_data[Math.floor(Math.random() * test_data.length)];
  return video;
};

export default getRandomTestVideo;
