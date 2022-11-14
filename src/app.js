const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const capybaraFactsRouter = require('./controllers/capybaras/capybaras.router')
const errorHandler = require('./middleware/error.middleware')
const notFoundHandler = require('./middleware/not-found.middleware')

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

// ! following must be mounted after all routes as they close req-res cycle
app.use(errorHandler)
app.use(notFoundHandler)

module.exports = app
