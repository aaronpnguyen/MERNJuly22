const mongoose = require("mongoose");
const DATABASE = "games"

mongoose.connect(`mongodb+srv://root:root@mernjuly2022.k0wzr4k.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${DATABASE}!`))
    .catch(error => console.log(`Something went wrong when connecting to the database `, error))