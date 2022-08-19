const GamesController = require("../controllers/games.controller")

module.exports = app => {
    app.post("/api/game/new", GamesController.createGame),
    app.get("/api/games", GamesController.getAllGames),
    app.get("/api/game/:id", GamesController.getOneGame),
    app.put("/api/game/update/:id", GamesController.updateOneGame),
    app.delete("/api/game/delete/:id", GamesController.deleteOneGame)
}