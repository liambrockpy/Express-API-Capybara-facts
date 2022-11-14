const request = require('supertest')
const app = require('../src/app')

describe('GET /', () => {
    it('should respond with 200', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toBe(200)
    })
})
