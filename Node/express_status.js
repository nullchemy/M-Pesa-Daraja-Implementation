const axios = require('axios');
const acces_token = require('./acces_token');

let data = JSON.stringify({
  "BusinessShortCode": " ",
  "Password": " ",
  "Timestamp": " ",
  "CheckoutRequestID": " "
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query',
  headers: { 
    'Authorization': 'Bearer '+acces_token,
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
