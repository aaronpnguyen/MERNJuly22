const Products = require('../models/products.model');

// CREATE

module.exports.createProduct = (request, response) => {
    const newProduct = request.body
    Products.create(newProduct)
        .then(product => response.json(product))
        .catch(error => response.json(error))
}

// READ

module.exports.getAllProducts = (request, response) => {
    Products.find()
        .then(products => response.json(products))
        .catch(error => response.json(error))
}

module.exports.getOneProduct = (request, response) => {
    const id = request.params.id
    Products.findOne({_id: id})
        .then(products => response.json(products))
        .catch(error => response.json(error))
}

// UPDATE

module.exports.updateOneProduct = (request, response) => {
    const id = request.params.id, updateValue = request.body
    Products.findOneAndUpdate(
        {_id: id},
        updateValue,
        {new: true, runValidators: true}
    )
        .then(products => response.json(products))
        .catch(error => response.json(error))
}

// DELETE

module.exports.deleteOneProduct = (request, response) => {
    const id = request.params.id
    Products.deleteOne({_id: id})
        .then(product => response.json(product))
        .catch(error => response.json(error))
}