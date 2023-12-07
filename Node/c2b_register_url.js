const axios = require('axios')
import MpesaEndpoints from './urls.js'
import access_token from './access_token.js'

const c2b_register_url = async () => {
  const endpoints = new MpesaEndpoints()
  const acc_tok = await access_token()
  try {
    let data = JSON.stringify({
      ShortCode: '',
      ResponseType: '',
      ConfirmationURL: '',
      ValidationURL: '',
    })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: endpoints.c2b_register_url,
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

export default c2b_register_url
