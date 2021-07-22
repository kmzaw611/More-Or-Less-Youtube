const Scraper = require("./Scraper");

const searchCount = 75;
let searchIter = 1;

const scrapVideos = async () => {
  while (searchIter <= searchCount) {
    const scraper = new Scraper();

    console.log();
    console.log("Scraping Operation No." + searchIter);
    console.log("-------------------------");
    console.log(`Scraping Term: '${scraper.getChosenTerm()}'`);
    console.log();

    await scraper.scrapeYoutubeAPI();

    searchIter++;
  }

  console.log("Done Scraping!");
};

scrapVideos();

// console.log('Number Of Videos:')
// new Scraper().getNumOfVideos();
