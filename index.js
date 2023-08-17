import cors from 'cors'
import express from 'express'
import initRoutes from './src/routers'
require('dotenv').config()
require('./server')

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)

const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})
