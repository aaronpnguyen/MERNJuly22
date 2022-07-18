const express = require("express");
const app = express();
port = 8000;

// Mongoose
require("./server/configs/mongoose.config"); // This initalizes the database in mongo

// Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const Routes = require('./server/routes/jokes.routes')
Routes(app)

app.listen(port, () => console.log("Listening to the port 8000"));