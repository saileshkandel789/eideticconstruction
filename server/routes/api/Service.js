const express = require("express");
const router = express.Router();
const serviceController = require("../../controller/Service");
const {isAuthenticated} = require("../../middleware/isAuthenticated");


// const multiparty = require("connect-multiparty");
// const abc = require("../../uploads")
// const ckeditor = require("@ckeditor/ckeditor5-adapter-ckfinder");
// const MultipartyMiddleware = multiparty({ uploadDir: "./uploads" });

// const blogController = require("../../controller/Blog");

const multer = require("multer");
// const { API } = require("../../../client/src/config");
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

router.post("/", upload.any(),isAuthenticated, serviceController.addService);
// router.post("/", MultipartyMiddleware, serviceController.addService);

router.get("/", serviceController.getServices);

router.get("/:serviceId", serviceController.getService);

router.post("/:serviceId",isAuthenticated, serviceController.deleteService);

// router.get("/:blogId", blogController.getBlog);

module.exports = router;
