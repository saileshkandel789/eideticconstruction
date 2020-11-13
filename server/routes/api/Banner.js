const express = require("express");
const router = express.Router();
const bannerController = require("../../controller/Banner");
const multer = require("multer");
const {isAuthenticated} = require("../../middleware/isAuthenticated");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/", upload.single("image"),isAuthenticated, bannerController.addBanner);

router.get("/", bannerController.getBanners);

router.get("/:bannerId", bannerController.getBanner);

router.post("/:bannerId",isAuthenticated, bannerController.deleteBanner);

module.exports = router;
