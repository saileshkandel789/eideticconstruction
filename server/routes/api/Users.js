const express = require("express");
const router = express.Router();
// const gravatar = require("gravatar");
const User = require("../../model/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const passport = require("passport");

const userController = require("../../controller/Users");

router.get("/test", (req, res) => {
  res.json({ msg: "user work" });
});

router.post("/register", userController.register);

router.post("/login", userController.login);

// router.get(
//   "/current",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     // res.json({ msg: "ooo" });
//     res.json({
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email,
//     });
//   }
// );
module.exports = router;
