const express = require("express");
const router = express.Router();
const { createProduct, getProducts } = require("../Controller/Product");
router.route("/").post(createProduct).get(getProducts);

module.exports = router;
