const Video = require("../model/videoDetail");
const videoController = {};
const thumbnailGenerator = require('../helpers/videoThumbnail');


videoController.addVideo = (req, res) => {
    thumbnailGenerator.generateThumbnail(
        // /api/videos is made publically available in App.js
        'http://localhost:4000/api/videos/' + req.file.filename.replace(/ /g, '_'), 
        req.file.filename.replace(/ /g, '_'));
      res.status(200).json({
        message: 'Video upload successful'
      });
}
videoController.deleteVideo = async(req, res) => { 
    try {
        const id = req.params.videoId;
        const deletedata = await Video.findOneAndDelete({ _id: id });
        return res.json(deletedata);
      } catch (err) {
        res.json(err);
      }
}

videoController.getVideo = async(req, res) => { 
    try {
        const data = await Video.find();
        return res.json(data);
      } catch (err) {
        res.json(err);
      }
}
module.exports = videoController;