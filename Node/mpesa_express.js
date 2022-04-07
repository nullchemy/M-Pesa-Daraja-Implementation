const axios = require('axios');
const access_token = require('access_token')

let data = JSON.stringify({
  "BusinessShortCode": " ",
  "Password": " ",
  "Timestamp": " ",
  "TransactionType": "CustomerPayBillOnline",
  "Amount": " ",
  "PartyA": " ",
  "PartyB": " ",
  "PhoneNumber": " ",
  "CallBackURL": "https://ip_address:port/callback",
  "AccountReference": " ",
  "TransactionDesc": " "
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
  headers: { 
    'Authorization': 'Bearer '+access_token,
    'Content-Type': 'application/json',
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
