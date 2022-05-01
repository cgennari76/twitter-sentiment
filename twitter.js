import fetch from 'node-fetch';


const baseTwitterSearchUrl = 'https://api.twitter.com/2/tweets/search/recent';
const defaultFetchOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
};
const queryParam = `#tesla (horrible OR worst OR sucks OR bad OR disappointing) -happy -exciting -excited -favorite -fav -amazing -lovely -incredible`;

fetch(`${baseTwitterSearchUrl}?query=${encodeURIComponent(queryParam)}&max_results=10`, defaultFetchOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
