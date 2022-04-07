const axios = require('axios');
require('dotenv').config()

const key = process.env.CONSUMER_KEY
const secret = process.env.CONSUMER_SECRET
let authkey = Buffer.from(key+':'+secret).toString('base64')

let config = {
  method: 'get',
  url: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
  headers: { 
    'Authorization': 'Basic '+authkey,
  }
};

module.exports = acc_token = () => {
    axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
