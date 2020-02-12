'use strict';
const axios = require('axios');

module.exports.joke = async event => {
  let statusCode, joke;
  try {
    const response = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    });
    statusCode = 200;
    joke = response.data.joke;
  } catch (error) {
    statusCode = 400;
    joke = error.toString();
  }

  return {
    statusCode,
    header: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(
      {
        message: 'Behold, this brilliant joke',
        input: joke,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

const hierarchy = [
  'Trooper', 'Corporal', 'Sergeant', 'Lieutenant', 'Captain', 'Major', 'Colonel', 'Marshal', 'General', 'Lord General', 'Warmaster', 'Lord Commander', 'High Governor of Terra'
];
module.exports.rank = async event => {
  const rank = event.queryStringParameters.rank;
  const queriedRank = hierarchy[rank > hierarchy.length ? hierarchy.length - 1 : rank];
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your rank enquiry result:',
        input: queriedRank,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
