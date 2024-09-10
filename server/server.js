const express = require('express')
const app = express()
const mongoose = require('mongoose')
const colors = require('colors')
const PORT = process.env.PORT || 4040
const connectDB = require('./config/db')
const logger = require('morgan')
const cors = require('cors')
const passport = require('passport')
const localStratergy = require('passport-local').Strategy
const User = require('./model/userModel')
const homeRoutes = require('./routes/petRoutes')
// midllewaresapp.use(
app.use(cors())
require('dotenv').config({ path: './config/.env' })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'curious cat',
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStratergy(User.authenticate))
passport.serializeUser(User.serializeUser)
passport.deserializeUser(User.deserializeUser)

// passing current user info to all routes
app.use((req, res, next) => {
  res.locals.currentUser = req.user
  next()
})
// database
connectDB()
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB'.underline.america)
})
//Logging
app.use(logger('dev'))

// routes
app.use('/', homeRoutes)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
