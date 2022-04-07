const axios = require('axios');
const access_token = require('access_token')

let data = JSON.stringify({
  "Initiator": "",
  "SecurityCredential": "",
  "CommandID": "TransactionReversal",
  "TransactionID": "",
  "Amount": "",
  "ReceiverParty": "",
  "RecieverIdentifierType": "4",
  "ResultURL": "",
  "QueueTimeOutURL": "",
  "Remarks": "",
  "Occasion": ""
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request',
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
