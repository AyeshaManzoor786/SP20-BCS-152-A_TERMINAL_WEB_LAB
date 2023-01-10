const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

//route for login
router.post("/login", async (req, res) => {
  let users = await User.findOne({ email: req.body.email });
  if (users) return res.status(400).send("User is already exist");
  let user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.generateHashedPassword;
  await user.save();
  let isValid = await bcrypt.compare(req.body.password, users.password);
  if (!isValid) return res.status(401).send("Invalid User");
  let token = jwt.sign(
    { _id: users._id, name: users.name },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
module.exports = router;
