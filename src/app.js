const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const capybaraFactsRouter = require('./controllers/capybaras/capybaras.router')

const app = express()

// Enhance API security
app.use(helmet())

// parse JSON into JS
app.use(bodyParser.json())

// enable CORS for all requests
app.use(cors())

// log HTTP requests
app.use(morgan('combined'))

app.use('/api/facts', capybaraFactsRouter)

module.exports = app
