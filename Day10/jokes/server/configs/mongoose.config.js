const mongoose = require("mongoose");
DATABASE = "jokes_db";

mongoose.connect(`mongodb://localhost/${DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${DATABASE}!`))
    .catch(error => console.log(`Something went wrong when connecting to the database `, error))