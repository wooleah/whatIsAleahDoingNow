// const axios = require('axios');
// TODO INITIAL ATTEMPT
// TODO 1. test axios with dad jokes✔️
// TODO 2. change it into netlify serverless function✔️
// TODO 3. check if you can run it periodically

// TODO NEXT LEVEL
// TODO 1. get random word(verb, adjective, noun) from api
// TODO 2. console log it to make a full sentence with subject Aleah
// TODO 3. turn it into a netlify serverless function

// exports.handler = async (event, context, callback) => {
//   return axios.get('https://icanhazdadjoke.com/', {
//     "headers": {
//       "Accept": "application/json"
//     }
//   })
//     .then(res => res.data)
//     .then(data => ({
//       statusCode: 200,
//       body: data.joke
//     }))
//     .catch(error => ({
//       statusCode: 422,
//       body: String(error)
//     }));
// }

const fetch = require('node-fetch');

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: {
        input: data.joke
      }
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};