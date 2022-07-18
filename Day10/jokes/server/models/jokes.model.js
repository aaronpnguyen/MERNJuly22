const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        require: [true, "Setup is required"]
    },
    punchline: {
        type: String,
        require: [true, "Punchline is required"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Jokes', JokesSchema);