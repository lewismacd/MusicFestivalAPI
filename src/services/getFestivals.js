const expectedResponse = 
[
    {
      "name": "LOL-palooza",
      "bands": [
        {
          "name": "Winter Primates",
          "recordLabel": ""
        },
        {
          "name": "Frank Jupiter",
          "recordLabel": "Pacific Records"
        },
        {
          "name": "Jill Black",
          "recordLabel": "Fourth Woman Records"
        },
        {
          "name": "Werewolf Weekday",
          "recordLabel": "XS Recordings"
        }
      ]
    },
    {
      "name": "Small Night In",
      "bands": [
        {
          "name": "Squint-281",
          "recordLabel": "Outerscope"
        },
        {
          "name": "The Black Dashes",
          "recordLabel": "Fourth Woman Records"
        },
        {
          "name": "Green Mild Cold Capsicum",
          "recordLabel": "Marner Sis. Recording"
        },
        {
          "name": "Yanke East",
          "recordLabel": "MEDIOCRE Music"
        },
        {
          "name": "Wild Antelope",
          "recordLabel": "Marner Sis. Recording"
        }
      ]
    },
    {
      "name": "Trainerella",
      "bands": [
        {
          "name": "Wild Antelope",
          "recordLabel": "Still Bottom Records"
        },
        {
          "name": "Manish Ditch",
          "recordLabel": "ACR"
        },
        {
          "name": "Adrian Venti",
          "recordLabel": "Monocracy Records"
        },
        {
          "name": "YOUKRANE",
          "recordLabel": "Anti Records"
        }
      ]
    },
    {
      "name": "Twisted Tour",
      "bands": [
        {
          "name": "Summon",
          "recordLabel": "Outerscope"
        },
        {
          "name": "Auditones",
          "recordLabel": "Marner Sis. Recording"
        },
        {
          "name": "Squint-281"
        }
      ]
    },
    {
      "bands": [
        {
          "name": "Critter Girls",
          "recordLabel": "ACR"
        },
        {
          "name": "Propeller",
          "recordLabel": "Pacific Records"
        }
      ]
    }
  ]
  

// const request = require('request');

// const expectedResponse = request('https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body);
// });



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


module.exports = { expectedResponse };


