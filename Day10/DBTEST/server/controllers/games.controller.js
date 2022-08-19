const Games = require('../models/games.model')

// CREATE

module.exports.createGame = (request, response) => {
    Games.create(request.body)
        .then(game => response.json(game))
        .catch(error => response.json(error))
}

// READ

module.exports.getAllGames = (request, response) => {
    Games.find()
        .then(games => response.json(games))
        .catch(error => response.json(error))
}

module.exports.getOneGame = (request, response) => {
    Games.findOne({_id: request.params.id})
        .then(game => response.json(game))
        .catch(error => response.json(error))
}

// UPDATE

module.exports.updateOneGame = (request, response) => {
    Games.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {new: true, runValidators: true}
    )
        .then(game => response.json(game))
        .catch(error => response.json(error))
}

// DELETE

module.exports.deleteOneGame = (request, response) => {
    Games.deleteOne({_id: request.params.id})
        .then(game => response.json(game))  
        .catch(error => response.json(error))
}