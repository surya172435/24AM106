// Product Controller - Handle HTTP requests for products
const ProductService = require("../service/ProductService");

class ProductController {
  // GET all products
  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts(req.query);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // GET product by ID
  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: "Product not found" });
    }
  }

  // POST create product
  async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // PUT update product
  async updateProduct(req, res) {
    try {
      const product = await ProductService.updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // DELETE product
  async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(200).json({ message: "Product deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // GET search products
  async searchProducts(req, res) {
    try {
      const products = await ProductService.searchProducts(req.query.q);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
