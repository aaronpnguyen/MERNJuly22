const Jokes = require("../models/jokes.model")

// CREATE

module.exports.createJoke = (request, response) => {
    const newJoke = request.body
    Jokes.create(newJoke)
        .then(joke => response.json(joke))
        .catch(error => response.json(error))
}

// READ

module.exports.getAllJokes = (request, response) => {
    Jokes.find()
        .then(jokes => response.json(jokes))
        .catch(error => response.json(error))
}

module.exports.getOneJoke = (request, response) => {
    const id = request.params.id
    Jokes.findOne({_id: id})
        .then(jokes => response.json(jokes))
        .catch(error => response.json(error))
}

// UPDATE

module.exports.updateOneJoke = (request, response) => {
    const id = request.params.id, updateValue = request.body
    Jokes.findOneAndUpdate(
        {_id: id},
        updateValue,
        {new: true, runValidators: true}
    )
        .then(jokes => response.json(jokes))
        .catch(error => response.json(error))
}

// DELETE

module.exports.deleteOneJoke = (request, response) => {
    const id = request.params.id
    Jokes.deleteOne({_id: id})
        .then(joke => response.json(joke))
        .catch(error => response.json(error))
}