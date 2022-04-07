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
    'Authorization': 'Bearer <Access-Token>', 
    'Content-Type': 'application/json', 
    'Cookie': 'incap_ses_1020_2742146=CIw9cWQ6n1Q4Y2/XPcUnDj8VT2IAAAAAxuAC2/1nq18paW/T2Lku+Q==; visid_incap_2742146=J+ZfDWoVT3uhUREl6qr84iz/TmIAAAAAQUIPAAAAAACvhu6L79mC7q80R1QNdYOw'
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
