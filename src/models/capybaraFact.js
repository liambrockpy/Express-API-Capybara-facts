const data = require('../../db/data.json')

// ! temporary database copy of data
const factsData = [...data.capybarasFacts]

class Fact {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
    }

    static get all() {
        const facts = factsData.map(fact => new Fact(fact))
        return facts
    }

    static get random() {
        const facts = Fact.all
        const randomIndex = Math.floor(Math.random() * facts.length)
        return facts[randomIndex]
    }

    static findById(id) {
        const specificFact = Fact.all.filter(fact => fact.id === id)[0]
        return specificFact
    }

    static create(fact) {
        const facts = Fact.all
        const newId = facts.length + 1
        const newFact = new Fact({ id: newId, ...fact })
        factsData.push({ ...newFact })
        return newFact
    }

    update(fact) {
        const facts = Fact.all
        const index = facts.findIndex(factItem => factItem.id == this.id)
        this.title = fact.title
        this.description = fact.description
        factsData[index] = { ...this }
        return this
    }

    delete() {
        const facts = Fact.all
        const index = facts.findIndex(fact => fact.id === this.id)
        if (index === -1) return
        factsData.splice(index, 1)
    }
}

module.exports = Fact
