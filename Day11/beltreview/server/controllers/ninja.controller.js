const Ninja = require('../models/ninja.model');

module.exports.findAllNinjas = (request, response) => {
    Ninja.find()
        .then(allNinjas => 
            response.json({results: allNinjas})
        )
        .catch(error => response.json(error))
}

module.exports.createNewNinja = (request, response) => {
    const newNinja = request.body
    Ninja.create(newNinja)
        .then(ninja => {
            response.json({results: ninja})
        })
        .catch(error => response.json(error))
}

module.exports.findOneNinja = (request, response) => {
    const id = request.params.id
    Ninja.findOne({_id: id})
        .then(oneNinja => {
            response.json({results: oneNinja})
        })
        .catch(error => response.json(error))
}

module.exports.updateOneNinja = (request, response) => {
    const id = request.params.id
    Ninja.findOneAndUpdate(
        {_id: id},
        request.body, 
        {new: true, runValidators: true}
    )
        .then(oneNinja => {
            response.json({results: oneNinja})
        })
        .catch(error => response.json(error))
}

module.exports.deleteNinja = (request, response) => {
    const id = request.params.id
    Ninja.deleteOne({_id: id})
        .then(oneNinja => {
            response.json({results: oneNinja})
        })
        .catch(error => response.json(error))
}