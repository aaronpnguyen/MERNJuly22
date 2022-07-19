const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"]
    },
    description: {
        type: String,
        require: [true, "Description is required"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Products', ProductsSchema);