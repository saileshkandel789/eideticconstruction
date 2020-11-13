const express = require('express');
const router = express.Router();
const multer = require('multer');
const VideoDetails = require('../../model/videoDetail');
const {isAuthenticated} = require("../../middleware/isAuthenticated");


const videoController = require("../../controller/Video");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

router.post('/', upload.single('file'),isAuthenticated, videoController.addVideo);

router.get('/', videoController.getVideo);
router.post("/:videoId" ,isAuthenticated,videoController.deleteVideo);


module.exports = router;