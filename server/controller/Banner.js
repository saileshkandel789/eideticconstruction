const bannerController = {};
const BannerSch = require("../model/Banner");

bannerController.addBanner = (req, res) => {
  let banners = req.body;
  if (banners && banners._id) {
    if (req.file) {
      banners.image = req.file.path;
    }
    BannerSch.findByIdAndUpdate(banners._id, { $set: banners }, { new: true })
      .then((update) => {
        return res.status(200).json(update);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const banner = new BannerSch({
      title: req.body.title,
      image: req.file.path,
    });
    banner
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  }
};

bannerController.getBanners = async (req, res, next) => {
  try {
    const data = await BannerSch.find();
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

bannerController.getBanner = async (req, res, next) => {
  try {
    const id = req.params.bannerId;
    const data = await BannerSch.findOne({
      _id: id,
    });
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

bannerController.deleteBanner = async (req, res, next) => {
  try {
    const id = req.params.bannerId;
    const deletedata = await BannerSch.findOneAndDelete({ _id: id });
    return res.json(deletedata);
  } catch (err) {
    res.json(err);
  }
};
module.exports = bannerController;
