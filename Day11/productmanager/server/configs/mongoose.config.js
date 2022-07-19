const mongoose = require("mongoose");
DATABASE = "products_db";

mongoose.connect(`mongodb+srv://root:root@july2022.shwr2gh.mongodb.net/${DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${DATABASE}!`))
    .catch(error => console.log(`Something went wrong when connecting to the database `, error))