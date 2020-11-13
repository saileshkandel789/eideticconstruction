const express = require("express");
const router = express.Router();

const booknowController = require("../../controller/BookNow");

router.post("/", booknowController.addbooking);

router.get("/", booknowController.getbooking);

module.exports = router;
