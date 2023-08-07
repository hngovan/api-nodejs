const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (_req, res) => {
  return res.send('SERVER ON SUCCESSFUL')
})

const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})