const express = require("express");
const router = express.Router();

//Diger route dosyalarini ice aktariyoruz
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const productRoute = require("./products.js");

//Her rotayi ilgili yol altinda kullaniyoruz
router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);

module.exports = router;
