const express = require("express");
const app = express();
const port = 8000;

// Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Config
require("./server/config/mongoose.config");

require("./server/routes/games.route")(app)

app.listen(port, () => console.log(`Listening on port: ${port}\n(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧`));