const notFoundHandler = (req, res, next) => {
    const message = "Resource not found"

    res.status(404).send(message)
}

module.exports = notFoundHandler
