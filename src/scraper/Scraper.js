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
(2) Using a list of top-50 most subscribed youtubers.
(3) Using random word generation.

To stay within daily API quota limit, running the scraper program will only do:
(1) 50 searches (5000 Units)
(2) Look up video info for each search result (25 x 50 = 1250 units)
(3) Check whether each video is already stored in the Firestore
(4) Only scrape and add the video if it's unique

MISC
-----
This method is heavily based on several of the methods and functions in the utils folder, which
I used earlier for developing and testing the frontend.
*/
