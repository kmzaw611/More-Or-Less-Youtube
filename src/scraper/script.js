const Scraper = require("./Scraper");

const searchCount = 75;
let searchIter = 1;
while (searchIter <= searchCount) {
  const scraper = new Scraper();

  console.log("Scraping Operation No." + searchIter);
  console.log("-------------------------");
  console.log(`Scraping Term: '${scraper.getChosenTerm()}'`);
  scraper.scrapeYoutubeAPI();

  searchIter++;
}
