const Authors = require('../models/authors.model');

// CREATE

module.exports.createAuthor = (request, response) => {
    const newAuthor = request.body
    Authors.create(newAuthor)
        .then(author => response.json(author))
        .catch(error => response.json(error))
}

// READ

module.exports.getAllAuthors = (request, response) => {
    Authors.find().collation({locale: "en" }).sort({name: "asc"}) // Sorting alphabetically, 1 for ascending, -1 for descending
        .then(authors => response.json(authors))
        .catch(error => response.json(error))
}

module.exports.getOneAuthor = (request, response) => {
    const id = request.params.id
    Authors.findOne({_id: id})
        .then(authors => response.json(authors))
        .catch(error => response.json(error))
}

// UPDATE

module.exports.updateOneAuthor = (request, response) => {
    const id = request.params.id, updateValue = request.body
    Authors.findOneAndUpdate(
        {_id: id},
        updateValue,
        {new: true, runValidators: true}
    )
        .then(authors => response.json(authors))
        .catch(error => response.json(error))
}

// DELETE

module.exports.deleteOneAuthor = (request, response) => {
    const id = request.params.id
    Authors.deleteOne({_id: id})
        .then(author => response.json(author))
        .catch(error => response.json(error))
}