const request = require('supertest')
const app = require('../src/app')

// const data = require('../db/data.json')

describe('GET /api/facts', () => {
    it('should respond 200 with item data', async () => {
        request(app).get('/api/facts')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type']).toMatch(/json/)
                expect(res.body).toBeDefined()
            })
    })
})

describe('GET /api/facts/:id', () => {
    it('should respond 200 with specific item data', async () => {
        request(app).get('/api/facts/1')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type']).toMatch(/json/)
                expect(res.body).toEqual({
                    "id": 1,
                    "title": "Food for thought 💩",
                    "description": "Much like rabbits, capybaras eat their own dung to extract maximum nutrition from their food!"
                })
            })
    })

    it('should respond 404 when data not found', async () => {
        await request(app).get('/api/facts/0')
            .expect(404)
    })
})

describe('GET /api/facts/random', () => {
    it('should respond 200 with random item data', async () => {
        request(app).get('/api/facts/random')
            .expect(200)
            .then(res => {
                expect(res.headers['content-type']).toMatch(/json/)
                expect(res.body.id).toBeDefined()
                expect(res.body.title).toBeDefined()
                expect(res.body.description).toBeDefined()
            })
    })
})

describe('POST /api/facts', () => {
    it.todo('should respond 201 with new data')

    it.todo('should respond 400 with invalid POST data')
})

describe('PATCH /api/facts/:id', () => {
    it.todo('should respond 200 with updated data')

    it.todo('should respond 400 with invalid PATCH data')
})

describe('DELETE /api/facts/:id', () => {
    it.todo('should respond 204 with no data')
})

