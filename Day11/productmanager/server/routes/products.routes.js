const ProductsController = require("./../controllers/products.controller")

module.exports = app => {
    app.post("/api/product/new", ProductsController.createProduct)
    app.get("/api/products", ProductsController.getAllProducts)
    app.get("/api/product/:id", ProductsController.getOneProduct)
    app.put("/api/product/update/:id", ProductsController.updateOneProduct)
    app.delete("/api/product/delete/:id", ProductsController.deleteOneProduct)
}