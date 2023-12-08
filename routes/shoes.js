const express = require("express");

const { getAllShoes } = require("../controllers/shoes");

const router = express.Router();

router.route("/").get(getAllShoes);

module.exports = router;
