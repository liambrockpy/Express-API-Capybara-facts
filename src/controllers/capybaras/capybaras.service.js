const Fact = require('../../models/capybaraFact')


const findAll = async () => new Promise((res, rej) => {
    setTimeout(() => {
        const facts = Fact.all
        res(facts)
    }, 0)
})

const findRandom = async () => new Promise((res, rej) => {
    setTimeout(() => {
        const fact = Fact.random
        res(fact)
    }, 0)
})

const find = async (id) => new Promise((res, rej) => {
    setTimeout(() => {
        const fact = Fact.findById(id)
        res(fact)
    }, 0)
})

const create = async (titleDescription) => new Promise((res, rej) => {
    setTimeout(() => {
        const newFact = Fact.create(titleDescription)
        res(newFact)
    }, 0)
})

const update = async (id, titleDescription) => new Promise((res, rej) => {
    find(id).then(selectedFact => {
        if (!selectedFact) res(null)
        setTimeout(() => {
            const updatedFact = selectedFact.update(titleDescription)
            res(updatedFact)
        }, 0)
    })
})

const deleteFact = async (id) => new Promise((res, rej) => {
    find(id).then(selectedFact => {
        setTimeout(() => {
            selectedFact.delete()
            res()
        }, 0)
    })
})

module.exports = {
    findAll,
    findRandom,
    create,
    find,
    update,
    deleteFact
}
