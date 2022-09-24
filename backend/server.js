// Dotenv
require('dotenv').config()
// Express Installation
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

// Mongoose Installation
require('./config/db.connection')

// Cors
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes

app.use('/pley', routes.pley)


// Port
app.listen(port, () => {
    console.log('Welcome to Pley!', port);
})
