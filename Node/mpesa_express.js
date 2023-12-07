import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
import MpesaEndpoints from './urls.js'

import access_token from './access_token.js'

const _generateTimeStamp = () => {
  const date = new Date()
  const pad2 = (num) => num.toString().padStart(2, '0')
  return `${date.getFullYear()}${pad2(date.getMonth() + 1)}${pad2(
    date.getDate()
  )}${pad2(date.getHours())}${pad2(date.getMinutes())}${pad2(
    date.getSeconds()
  )}`
}

const _generatePassword = (BusinessShortCode, passkey) => {
  const Timestamp = _generateTimeStamp()
  const data = `${BusinessShortCode}${passkey}${Timestamp}`
  return Buffer.from(data).toString('base64')
}

const stkpush = async (
  shortcode,
  amount,
  PhoneNumber,
  passkey = process.env.PASSKEY,
  callback = 'https://ecommerceserver-7ucs.onrender.com/api/users/mpesa/callback',
  AccountReference = 'Test',
  TransactionDesc = 'Test'
) => {
  const endpoints = new MpesaEndpoints()
  let data = JSON.stringify({
    BusinessShortCode: shortcode,
    Password: _generatePassword(shortcode, passkey),
    Timestamp: _generateTimeStamp(),
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: PhoneNumber,
    PartyB: shortcode,
    PhoneNumber: PhoneNumber,
    CallBackURL: callback,
    AccountReference: AccountReference,
    TransactionDesc: TransactionDesc,
  })
  const acc_tok = await access_token()

  let config = {
    method: 'post',
    url: endpoints.mpesa_express(),
    headers: {
      Authorization: 'Bearer ' + acc_tok,
      'Content-Type': 'application/json',
    },
    data: data,
  }

  try {
    const res = await axios(config)
    return res.data
  } catch (error) {
    console.log(error)
    return { stack: error }
  }
}

export default stkpush
