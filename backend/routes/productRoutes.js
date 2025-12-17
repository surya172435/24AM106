// Product Routes
const express = require("express");
const router = express.Router();
const ProductController = require("../controller/ProductController");

// GET all products
router.get("/", ProductController.getAllProducts);

// GET search products (must come before /:id)
router.get("/search", ProductController.searchProducts);

// GET product by ID
router.get("/:id", ProductController.getProductById);

// POST create product (admin only)
router.post("/", ProductController.createProduct);

// PUT update product (admin only)
router.put("/:id", ProductController.updateProduct);

// DELETE product (admin only)
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
