const express = require('express')
const factService = require('./capybaras.service')
const capybarasRouter = express.Router()

capybarasRouter.get('/', async (req, res) => {
    try {
        const facts = await factService.findAll()
        res.status(200).send(facts)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

capybarasRouter.get('/random', async (req, res) => {
    try {
        const fact = await factService.findRandom()
        res.status(200).send(fact)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

capybarasRouter.get('/:id', async (req, res) => {
    const factId = parseInt(req.params.id)
    try {
        const selectedFact = await factService.find(factId)

        if (selectedFact) res.status(200).send(selectedFact)
        else res.status(404).send('Item not found')
    } catch (err) {
        res.status(500).send(err.message)
    }
})

capybarasRouter.post('/', async (req, res) => {
    const data = req.body
    if (!data) res.status(400).send('Invalid post data, please correct the request')
    else {
        try {
            const newFact = await factService.create(data)
            res.status(201).json(newFact)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
})

capybarasRouter.patch('/:id', async (req, res) => {
    const data = req.body
    if (!data) res.status(400).send('Invalid post data, please correct the request')
    else {
        const factId = parseInt(req.params.id)
        try {
            const updatedFact = await factService.update(factId, data)
            if (updatedFact) res.status(200).json(updatedFact)

            res.status(404).send('Item not found')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
})

capybarasRouter.delete('/:id', async (req, res) => {
    const factId = parseInt(req.params.id)
    try {
        await factService.deleteFact(factId)
        res.sendStatus(204)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = capybarasRouter
