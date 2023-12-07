import dotenv from 'dotenv'
dotenv.config()

class MpesaEndpoints {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development'
  }

  mpesa_express() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    }
  }

  access_token() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    } else {
      return 'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
    }
  }

  b2b() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/b2b/v1/paymentrequest'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/b2b/v1/paymentrequest'
    }
  }

  b2c() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/b2c/v1/paymentrequest'
    }
  }

  c2b_register_url() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/c2b/v1/registerurl'
    }
  }

  c2b() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/c2b/v1/simulate'
    }
  }

  express_status() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query'
    }
  }

  reverse() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/reversal/v1/request'
    }
  }

  transaction_status() {
    if (this.isDevelopment) {
      return 'https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query'
    } else {
      return 'https://api.safaricom.co.ke/mpesa/transactionstatus/v1/query'
    }
  }
}

export default MpesaEndpoints
