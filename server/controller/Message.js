const contactController = {};
const ContactSch = require("../model/Message");
const validateContactUs = require("../validation/contact");

contactController.addContact = async (req, res) => {
  try {
    const { errors, isValid } = validateContactUs(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const contactDetail = req.body;
    const new_contact = new ContactSch(contactDetail);
    const new_contact_save = await new_contact.save();
    return res.json(new_contact_save);
  } catch (err) {
    res.json(err);
  }
};
contactController.getContact = async (req, res, next) => {
  try {
    const data = await ContactSch.find();
    return res.json(data);
  } catch (err) {
    res.json(err);
  }
};

module.exports = contactController;
