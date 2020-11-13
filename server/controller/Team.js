const teamController = {};
const TeamSch = require("../model/team");

teamController.addTeam = (req, res) => {
  let teams = req.body;
  if (teams && teams._id) {
    if (req.file) {
      teams.image = req.file.path;
    }
    TeamSch.findByIdAndUpdate(teams._id, { $set: teams }, { new: true })
      .then((update) => {
        return res.status(200).json(update);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const team = new TeamSch({
      name: req.body.name,
      position: req.body.position,
      image: req.file.path,
    });
    team
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  }
};

teamController.getTeams = async (req, res, next) => {
  try {
    const data = await TeamSch.find();
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

teamController.getTeam = async (req, res, next) => {
  try {
    const id = req.params.teamId;
    const data = await TeamSch.findOne({
      _id: id,
    });
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

teamController.deleteTeam = async (req, res, next) => {
  try {
    const id = req.params.teamId;
    const deletedata = await TeamSch.findOneAndDelete({ _id: id });
    return res.json(deletedata);
  } catch (err) {
    res.json(err);
  }
};
module.exports = teamController;
