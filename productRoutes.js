const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const validate = require("../src/middleware/validate");
const productSchema = require("../schemas/productSchema");

// GET all products
router.get("/", getProducts);

// GET product by ID
router.get("/:id", getProductById);

// CREATE product
router.post("/", validate(productSchema), createProduct);

// UPDATE product
router.put("/:id", validate(productSchema), updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;