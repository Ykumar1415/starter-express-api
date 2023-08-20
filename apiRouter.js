const express = require("express");
const router = express.Router();
const chatiController = require("./controller");
router.post("/getans", chatiController.chai);
module.exports = router;
