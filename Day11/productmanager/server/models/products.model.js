const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
        minlength: [3, "Length of title must be 3 characters!"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"],
        min: [0.009, "Price must be greater than 0!"]
    },
    description: {
        type: String,
        require: [true, "Description is required"],
        minlength: [3, "Length of description must be 3 characters!"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Products', ProductsSchema);