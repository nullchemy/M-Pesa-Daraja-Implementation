const axios = require('axios')
const acces_token = require('./acces_token')

const transactionstatus = async () => {
  const endpoints = new MpesaEndpoints()
  const acc_tok = await acces_token()
  try {
    let data = JSON.stringify({
      Initiator: '',
      SecurityCredential: '',
      CommandID: 'TransactionStatusQuery',
      TransactionID: '',
      PartyA: '',
      IdentifierType: '',
      ResultURL: '',
      QueueTimeOutURL: '',
      Remarks: '',
      Occasion: '',
    })

    let config = {
      method: 'post',
      url: endpoints.transactionstatus,
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

export default transactionstatus
