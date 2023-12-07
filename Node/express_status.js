import axios from 'axios'
import MpesaEndpoints from './urls.js'
import access_token from './access_token.js'

const express_status = async () => {
  const endpoints = new MpesaEndpoints()
  const acc_tok = await access_token()
  try {
    let data = JSON.stringify({
      BusinessShortCode: ' ',
      Password: ' ',
      Timestamp: ' ',
      CheckoutRequestID: ' ',
    })

    let config = {
      method: 'post',
      url: endpoints.express_status,
      headers: {
        Authorization: 'Bearer ' + acc_tok,
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const res = axios(config)
    return res.data
  } catch (err) {
    console.log(err)
    return { stack: err }
  }
}

export default express_status
