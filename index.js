// const axios = require('axios');

// const hello = axios.get('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals')
//   .then(response => {
//     console.log("hiya!!");
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });


const request = require('request');

const expectedResponse = request('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
});

console.log(body);

// console.log(expectedResponse);
// console.log("--------");
// console.log(expectedResponse.body);
