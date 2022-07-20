const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;

// Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// Mongoose
require("./server/config/mongoose.config");

// Routes
require("./server/routes/authors.route")(app)

app.listen(port, () => console.log(`Listening on port: ${port}\n(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧`));