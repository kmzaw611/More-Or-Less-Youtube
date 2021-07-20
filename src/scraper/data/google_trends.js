const googleTrends = [];

// The following data is from the 2020 dataset.
const news2020 = [
  "Coronavirus",
  "Election results",
  "Iran",
  "Beirut",
  "Hantavirus",
];

const actors2020 = [
  "Tom Hanks",
  "Joaquin Phoenix",
  "Amitabh Bachchan",
  "Ricky Gervais",
  "Jada Pinkett Smith",
];

const games2020 = [
  "Among Us",
  "Fall Guys: Ultimate Knockout",
  "Valorant",
  "Genshin Impact",
  "The Last of Us 2",
];

const movies2020 = [
  "Parasite",
  "1917",
  "Black Panther",
  "365 Dni",
  "Contagion",
];

const people2020 = [
  "Joe Biden",
  "Kim Jong Un",
  "Boris Johnson",
  "Kamala Harris",
  "Tom Hanks",
];

const tvshows2020 = [
  "Tiger King",
  "Big Brother Brasil",
  "Money Heist",
  "Cobra Kai",
  "The Umbrella Academy",
];

// The following data is from the 2019 dataset.
const news2019 = [
  "Copa America",
  "Notre Dame",
  "ICC Cricket World Cup",
  "Hurricane Dorian",
  "Rugby World Cup",
];

const actors2019 = [
  "Jussie Smollett",
  "Kevin Hart",
  "Joaquin Phoenix",
  "Keanu Reeves",
  "Lori Loughlin",
];

const games2019 = [
  "Resident Evil 2",
  "Call of Duty: Modern Warfare",
  "Star Wars Jedi: Fallen Order",
  "Apex Legends",
  "Sekiro: Shadows Die Twice",
];

const movies2019 = [
  "Avengers: Endgame",
  "Joker",
  "Captain Marvel",
  "Toy Story 4",
  "Aquaman",
];

const people2019 = [
  "Antonio Brown",
  "Neymar",
  "James Charles",
  "Jussie Smollett",
  "Kevin Hart",
];

const tvshows2019 = [
  "Game of Thrones",
  "Stranger Things",
  "Chernobyl",
  "When They See Us",
  "The Umbrella Academy",
];

// The following data is from the 2018 dataset.
const news2018 = [
  "World Cup",
  "Hurricane Florence",
  "Mega Millions Result",
  "Royal Wedding",
  "Election Results",
];

const actors2018 = [
  "Sylvester Stallone",
  "Logan Paul",
  "Pete Davidson",
  "Bill Cosby",
  "Noah Centineo",
];

const games2018 = [
  "Red Dead Redemption 2",
  "God of War",
  "Spider-Man",
  "Super Smash Bros. Ultimate",
  "Far Cry 5",
];

const movies2018 = [
  "Black Panther",
  "Deadpool 2",
  "Venom",
  "Avengers: Infinity War",
  "Bohemian Rhapsody",
];

const people2018 = [
  "Meghan Markle",
  "Demi Lovato",
  "Sylvester Stallone",
  "Logan Paul",
  "Khloe Kardashian",
];

const tvshows2018 = [
  "Roseanne",
  "Altered Carbon",
  "The Haunting of Hill House",
  "American Idol",
  "Lost in Space",
];

googleTrends.push(...news2020);
googleTrends.push(...actors2020);
googleTrends.push(...games2020);
googleTrends.push(...movies2020);
googleTrends.push(...people2020);
googleTrends.push(...tvshows2020);
googleTrends.push(...news2019);
googleTrends.push(...actors2019);
googleTrends.push(...games2019);
googleTrends.push(...movies2019);
googleTrends.push(...people2019);
googleTrends.push(...tvshows2019);
googleTrends.push(...news2018);
googleTrends.push(...actors2018);
googleTrends.push(...games2018);
googleTrends.push(...movies2018);
googleTrends.push(...people2018);
googleTrends.push(...tvshows2018);

module.exports = googleTrends;
