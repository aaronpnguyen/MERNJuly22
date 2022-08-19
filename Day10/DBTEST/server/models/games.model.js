const mongoose = require("mongoose")

const GamesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of game is required!"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Games', GamesSchema)