// The current data is scraped from the 2020 dataset.
const news = [
  "Coronavirus",
  "Election results",
  "Iran",
  "Beirut",
  "Hantavirus",
];

const actors = [
  "Tom Hanks",
  "Joaquin Phoenix",
  "Amitabh Bachchan",
  "Ricky Gervais",
  "Jada Pinkett Smith",
];

const games = [
  "Among Us",
  "Fall Guys: Ultimate Knockout",
  "Valorant",
  "Genshin Impact",
  "The Last of Us 2",
];

const movies = ["Parasite", "1917", "Black Panther", "365 Dni", "Contagion"];

const people = [
  "Joe Biden",
  "Kim Jong Un",
  "Boris Johnson",
  "Kamala Harris",
  "Tom Hanks",
];

const tvshows = [
  "Tiger King",
  "Big Brother Brasil",
  "Money Heist",
  "Cobra Kai",
  "The Umbrella Academy",
];

const googleTrends = [];
googleTrends.push(...news);
googleTrends.push(...actors);
googleTrends.push(...games);
googleTrends.push(...movies);
googleTrends.push(...people);
googleTrends.push(...tvshows);

export default googleTrends;
