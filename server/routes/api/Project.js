const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../../middleware/isAuthenticated");

const projectController = require("../../controller/Project");

const multer = require("multer");

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

router.post("/", upload.single("image"),isAuthenticated, projectController.addProject);

router.get("/", projectController.getProjects);

router.get("/:projectId", projectController.getProject);

router.post("/:projectId",isAuthenticated, projectController.deleteProject);

module.exports = router;
