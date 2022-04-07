const axios = require('axios');
let data = JSON.stringify({
  "Initiator": "",
  "SecurityCredential": "",
  "CommandID": "",
  "SenderIdentifierType": "",
  "RecieverIdentifierType": "",
  "Amount": "",
  "PartyA": "",
  "PartyB": "",
  "AccountReference": "",
  "Remarks": "",
  "QueueTimeOutURL": "",
  "ResultURL": ""
});

let config = {
  method: 'post',
  url: 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest',
  headers: { 
    'Authorization': 'Bearer <Access-Token>', 
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
