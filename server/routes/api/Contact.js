const express = require("express");
const router = express.Router();

const messageController = require("../../controller/Message");

router.post("/", messageController.addContact);

router.get("/", messageController.getContact);

module.exports = router;
