require('dotenv').config()

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  }
}
