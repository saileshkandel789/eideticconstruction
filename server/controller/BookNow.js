const booknowController = {};
const BookNowSch = require("../model/BookNow");

booknowController.addbooking = async (req, res) => {
  try {
    const booknowDetail = req.body;
    const new_booknow = new BookNowSch(booknowDetail);
    const new_booknow_save = await new_booknow.save();
    return res.json(new_booknow_save);
  } catch (err) {
    res.json(err);
  }
};
booknowController.getbooking = async (req, res, next) => {
  try {
    const data = await BookNowSch.find();
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

module.exports = booknowController;
