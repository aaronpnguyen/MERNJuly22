const JokesController = require("./../controllers/jokes.controller")

module.exports = app => {
    app.post("/api/joke/new", JokesController.createJoke)
    app.get("/api/jokes", JokesController.getAllJokes)
    app.get("/api/joke/:id", JokesController.getOneJoke)
    app.put("/api/joke/update/:id", JokesController.updateOneJoke)
    app.delete("/api/joke/delete/:id", JokesController.deleteOneJoke)
}