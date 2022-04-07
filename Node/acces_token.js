//access_token Endpoint https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials
const axios = require('axios');

const key = 'a5YkD1vMqhRvZ9yDlbwlW0PCTbk08fBk'
const secret = 'IP5STQzreXu4SGBQ'
let authkey = Buffer.from(key+':'+secret).toString('base64')

let config = {
  method: 'get',
  url: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
  headers: { 
    'Authorization': 'Basic '+authkey,
  }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
