import axios from 'axios'
import MpesaEndpoints from './urls.js'
import access_token from './access_token.js'

const b2c = async () => {
  const endpoints = new MpesaEndpoints()
  const acc_tok = await access_token()
  try {
    let data = JSON.stringify({
      InitiatorName: '',
      SecurityCredential: '',
      CommandID: '',
      Amount: '',
      PartyA: '',
      PartyB: '',
      Remarks: '',
      QueueTimeOutURL: '',
      ResultURL: '',
      Occasion: '',
    })

    let config = {
      method: 'post',
      url: endpoints.b2c,
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

export default b2c
