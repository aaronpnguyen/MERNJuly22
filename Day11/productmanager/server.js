const express = require("express");
const cors = require('cors');
const app = express();
port = 8000;

// Mongoose
require("./server/configs/mongoose.config"); // This initalizes the database in mongo

// Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cors
app.use(cors());

// Routes
require('./server/routes/products.routes')(app)

app.listen(port, () => console.log(`Listening to the port ${port}\n(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧`));