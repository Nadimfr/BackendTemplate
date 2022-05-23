const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
// router.get("/type", productController.getProductsbyType);

module.exports = router;
