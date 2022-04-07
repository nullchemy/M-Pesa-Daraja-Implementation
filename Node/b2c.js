const axios = require('axios')
const access_token = require('access_token')

let data = JSON.stringify({
  "InitiatorName": "",
  "SecurityCredential": "",
  "CommandID": "",
  "Amount": "",
  "PartyA": "",
  "PartyB": "",
  "Remarks": "",
  "QueueTimeOutURL": "",
  "ResultURL": "",
  "Occasion": ""
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest',
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
