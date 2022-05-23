const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/drinks", productController.getDrinks);
router.get("/gymtools", productController.getGymTools);
router.get("/packages", productController.getPackages);
router.get("/:id", productController.getProduct);
router.put("/:id", productController.updateProduct);
router.get("/", productController.getProducts);
router.post("/", productController.createProduct);

module.exports = router;
