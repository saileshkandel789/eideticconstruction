const serviceController = {};
const ServiceSch = require("../model/Service");

serviceController.addService = async (req, res) => {
  try {
    console.log(req.files, "opopop");
    let services = req.body;
    if (services && services._id) {
      if (req.files) {
        services.image = req.files[0].path;
        // console.log(req.file.path, "ypyp");
        // services.image = req.files[0].path;
      }
      ServiceSch.findByIdAndUpdate(
        services._id,
        { $set: services },
        { new: true }
      )
        .then((update) => {
          return res.status(200).json(update);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const service = new ServiceSch({
        title: req.body.title,
        short_description: req.body.short_description,
        description: req.body.description,
        image: req.files[0].path,
      });
      const new_service_save = await service.save();
      return res.json({
        new_service_save,
        uploaded: true,
        url: `http://localhost:4000/${req.files[0].path}`,
      });
    }
  } catch (err) {
    res.json(err);
  }
};
serviceController.getServices = async (req, res, next) => {
  try {
    const data = await ServiceSch.find();
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};
serviceController.getService = async (req, res, next) => {
  try {
    const id = req.params.serviceId;
    const data = await ServiceSch.findOne({
      _id: id,
    });
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

serviceController.deleteService = async (req, res, next) => {
  try {
    const id = req.params.serviceId;
    const deletedata = await ServiceSch.findOneAndDelete({ _id: id });
    return res.json(deletedata);
  } catch (err) {
    res.json(err);
  }
};

module.exports = serviceController;
