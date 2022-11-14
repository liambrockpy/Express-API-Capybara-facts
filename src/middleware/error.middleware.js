const HttpException = require('../common/http-exception')

const errorHandler = (error, req, res, next) => {
    const err = new HttpException(error.statusCode, error.message, error.error)
    const status = err.statusCode || err.status || 500

    res.status(status).send(error)
}

module.exports = errorHandler
