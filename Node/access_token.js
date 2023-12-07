import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const key = process.env.CONSUMER_KEY
const secret = process.env.CONSUMER_SECRET

const acc_token = async () => {
  let authkey = Buffer.from(key + ':' + secret).toString('base64')

  let config = {
    method: 'get',
    url: 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    headers: {
      Authorization: 'Basic ' + authkey,
    },
  }
  try {
    const res = await axios(config)
    return res.data.access_token
  } catch (err) {
    console.log(err.response)
  }
}

export default acc_token
