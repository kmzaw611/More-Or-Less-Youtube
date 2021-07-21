# Higher Lower Game - Youtube Edition

If you've ever played the Higher Lower game, then you know what this is. This web app is the same thing - but for Youtube videos. It's quite a bit of fun to play, and I could not find any variant online for Youtube videos, so I decided to build one myself.

_.gif here_

## Try It Out

You can try it out here at: https://www.moreorlessyoutube.com

If you would like to try it out locally,

Clone the repo: `git clone https://github.com/KyleKMZ/ More-Or-Less-Youtube`

Use either Docker or npm afterwards.

`docker build -t moreorless:latest .`\
`docker run --name moreorless -d -p 3000:3000 moreorless:latest`

### or

`npm install`\
`npm start`

Then go to your browser at https://localhost:3000.

## Implementation

React with Semantic UI is used to develop the frontend. A serverless solution with Firebase was implemented to store and retrieve Youtube videos from a database.

A large amount of Youtube videos were scraped and stored in the Firestore database using a method I developed. Please see src/scraper/Scraper.js for a detailed explanation on how it works.
