const axios = require('axios');
const acces_token = require('./acces_token');

let data = JSON.stringify({
  "ShortCode": " ",
  "CommandID": "CustomerPayBillOnline",
  "Amount": " ",
  "Msisdn": " ",
  "BillRefNumber": " "
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate',
  headers: { 
    'Authorization': 'Bearer '+access_token,
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
