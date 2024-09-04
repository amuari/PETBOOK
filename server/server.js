const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require('colors')
const PORT = process.env.PORT || 4040
const connectDB = require('./config/db')
const cors = require('cors')
const homeRoutes = require('./routes/petRoutes')
// midllewaresapp.use(
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)
require('dotenv').config({ path: './config/.env' })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// database
connectDB()
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB'.underline.america)
})

// routes
app.use('/', homeRoutes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
