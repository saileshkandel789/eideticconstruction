const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateContactUs(data) {
  //   console.log(data);
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "name field be required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field be required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone field be required";
  }
  if (Validator.isEmpty(data.subject)) {
    errors.subject = "subject field be required";
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "message field be required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "email is invalid";
  }

  //   console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
