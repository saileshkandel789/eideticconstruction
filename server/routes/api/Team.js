const express = require("express");
const router = express.Router();
const {isAuthenticated} = require("../../middleware/isAuthenticated");


const teamController = require("../../controller/Team");
const imageupload = require("../../middleware/photoupload");
const multer = require("multer");

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

router.post("/", upload.single("image"),isAuthenticated, teamController.addTeam);

router.get("/", teamController.getTeams);

router.get("/:teamId", teamController.getTeam);

router.post("/:teamId",isAuthenticated ,teamController.deleteTeam);

module.exports = router;
