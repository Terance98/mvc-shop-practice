const express = require('express');
const path = require('path');
const rootPath = require(path.join(__dirname, '..', 'components', 'path'));
const shopController = require(path.join(rootPath, 'controllers', 'shop_controller'));
const router = express.Router();

router.get("/", shopController.getIndexPage);

router.get("/products", shopController.getProductsPage);

router.get("/cart", shopController.getCartPage);


module.exports = router;