const express = require("express");
const router = express.Router();

const blogController = require("../../controller/Blog");
const imageupload = require("../../middleware/photoupload");
const multer = require("multer");
const {isAuthenticated} = require("../../middleware/isAuthenticated");

// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    // cb(null, new Date().toISOString() + file.originalname);
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

// router.post("/", imageupload.uploadimage, blogController.addBlog);
router.post("/", upload.single("image"),isAuthenticated, blogController.addBlog);

router.get("/", blogController.getBlogs);

router.get("/:blogId", blogController.getBlog);

router.post("/:blogId",isAuthenticated, blogController.deleteBlog);

module.exports = router;
