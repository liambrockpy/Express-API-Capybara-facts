const express = require('express')
const factService = require('./capybaras.service')
const capybarasRouter = express.Router()

capybarasRouter.get('/', async (req, res) => {
    try {
        const facts = await factService.findAll()
        res.status(200).send(facts)
    } catch (err) {
        res.status(204).send(err)
    }
})

capybarasRouter.get('/random', async (req, res) => {
    try {
        const fact = await factService.findRandom()
        res.status(200).send(fact)
    } catch (err) {
        res.status(204).send(err)
    }
})

capybarasRouter.get('/:id', async (req, res) => {
    try {
        const factId = parseInt(req.params.id)
        const selectedFact = await factService.find(factId)
        res.status(200).send(selectedFact)
    } catch (err) {
        res.status(404).send(err)
    }
})

capybarasRouter.post('/', async (req, res) => {
    const data = req.body
    if (!data) res.status(400).send('Invalid post data, please correct the request')
    try {
        const newFact = await factService.create(data)
        res.status(201).send(newFact)
    } catch (err) {
        res.status(500).send(err)
    }
})

capybarasRouter.patch('/:id', async (req, res) => {
    const data = req.body
    if (!data) res.status(400).send('Invalid post data, please correct the request')
    try {
        const factId = parseInt(req.params.id)
        const updatedFact = await factService.update(factId, data)
        res.status(200).send(updatedFact)
    } catch (err) {
        res.status(500).send(err)
    }
})

capybarasRouter.delete('/:id', async (req, res) => {
    try {
        const factId = parseInt(req.params.id)
        await factService.deleteFact(factId)
        res.status(200).send()
    } catch (err) {
        res.status(404).send(err)
    }
})

module.exports = capybarasRouter
