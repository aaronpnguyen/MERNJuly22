const AuthorsController = require("../controllers/authors.controller")

module.exports = app => {
    app.post("/api/author/new", AuthorsController.createAuthor)
    app.get("/api/authors", AuthorsController.getAllAuthors)
    app.get("/api/author/:id", AuthorsController.getOneAuthor)
    app.put("/api/author/update/:id", AuthorsController.updateOneAuthor)
    app.delete("/api/author/delete/:id", AuthorsController.deleteOneAuthor)
}