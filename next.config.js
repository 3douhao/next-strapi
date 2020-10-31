require('dotenv').config()
const withImages = require('next-images')
// withImages()
const svgImport = withImages()

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL
  },
  svgImport
}
