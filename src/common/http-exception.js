/**
 * @param {number} statusCode
 * @param {string} message
 * @param {string?} error
 */
class HttpException extends Error {
    statusCode
    status
    message
    error

    constructor(statusCode, message, error) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.error = error || null;
    }
}

module.exports = HttpException
