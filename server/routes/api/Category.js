const express = require("express");
const router = express.Router();
const categoryController = require("../../controller/Category");
const {isAuthenticated} = require("../../middleware/isAuthenticated");



router.post("/", categoryController.addCategory);

router.get("/", categoryController.getCategory);

// router.get("/:bannerId", bannerController.getBanner);

// router.post("/:bannerId",isAuthenticated, bannerController.deleteBanner);

module.exports = router;
