const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be at least 2 characters long!"]
    },
    numProjects: {
        type: Number,
        required: [true, "Number of projects is needed"],
        min: [0, "You cannot have negative projects!"]
    },
    imgUrl: {
        type: String,
        required: [true, "You must have an image!"],
    },
    graduationDate: {
        type: Date
    },
    isVeteran: {
        type: Boolean
    }
}, {timestamps: true})

const Ninja = mongoose.model("Ninja", NinjaSchema);

module.exports = Ninja;