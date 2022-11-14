const Fact = require('../../models/capybaraFact')


const findAll = async () => new Promise((res, rej) => {
    setTimeout(() => {
        const facts = Fact.all
        facts ?
            res(facts)
            :
            rej('Error - no data found')
    }, 0)
})

const findRandom = async () => new Promise((res, rej) => {
    setTimeout(() => {
        const fact = Fact.random
        fact ?
            res(fact)
            :
            rej('Error - no data found')
    }, 0)
})

const find = async (id) => new Promise((res, rej) => {
    setTimeout(() => {
        const fact = Fact.findById(id)
        fact ?
            res(fact)
            :
            rej(`Error - unable to find fact of id ${id}`)
    }, 0)
})

const create = async (titleDescription) => new Promise((res, rej) => {
    setTimeout(() => {
        const newFact = Fact.create(titleDescription)
        newFact ?
            res(newFact)
            :
            rej('Error - unable to create new fact')
    }, 0)
})

const update = async (id, titleDescription) => new Promise((res, rej) => {
    find(id).then(selectedFact =>
        setTimeout(() => {
            const updatedFact = selectedFact.update(titleDescription)
            res(updatedFact)
        }, 0)
    )
        .catch(err => rej(err))
})

const deleteFact = async (id) => new Promise((res, rej) => {
    find(id).then(selectedFact =>
        setTimeout(() => {
            selectedFact.delete()
            res()
        }, 0)
    )
        .catch(err => rej(err))
})

module.exports = {
    findAll,
    findRandom,
    create,
    find,
    update,
    deleteFact
}
