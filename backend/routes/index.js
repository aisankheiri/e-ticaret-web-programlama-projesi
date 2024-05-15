const express = require("express");
const router = express.Router();

//Diger route dosyalarini ice aktariyoruz
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

//Her rotayi ilgili yol altinda kullaniyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);

module.exports = router;
