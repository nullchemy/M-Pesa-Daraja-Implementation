import axios from 'axios'
import MpesaEndpoints from './urls.js'
import access_token from './access_token.js'

const reverse = async () => {
  const endpoints = new MpesaEndpoints()
  const acc_tok = await access_token()
  try {
    let data = JSON.stringify({
      Initiator: '',
      SecurityCredential: '',
      CommandID: 'TransactionReversal',
      TransactionID: '',
      Amount: '',
      ReceiverParty: '',
      RecieverIdentifierType: '4',
      ResultURL: '',
      QueueTimeOutURL: '',
      Remarks: '',
      Occasion: '',
    })

    let config = {
      method: 'post',
      url: endpoints.reverse,
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

export default reverse
