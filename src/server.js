import express from 'express'
import 'dotenv/config'
require('dotenv').config()

const app = express()

const hostname = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  // Test Absolute import mapOrder
  res.end('<h1>Hello World!</h1><hr>')
})

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at ${hostname}:${port}/`)
})
