const express = require("express");
const router = express.Router();
const { classifyName } = require("../controllers/classify.controller");

router.get("/classify", classifyName);

module.exports = router;