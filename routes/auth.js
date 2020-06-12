const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/logout", (req, res) => {
  return req.session.destroy(() => res.json("Logout"));
});

router.post("/signup", (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email)
    return res.json("Both fileds are required.");

  User.findOne({ email })
    .then((match) => {
      if (match) return res.json("Email not available.");
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      User.create({ username, password: hash, email: email }).then(
        (newUser) => {
          return (req.session.currentUser = newUser);
        }
      );
    })
    .catch((err) => res.json(err));
});

router.get("/login", (req, res) => {
  return res.json("HOHO");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.json("Both fileds are required.");

  User.findOne({ username })
    .then((match) => {
      if (!match) return res.json("Invalid infos");
      const matchPasswords = bcrypt.compareSync(password, match.password);
      if (!matchPasswords) return res.json("Invalid credentials");
      req.session.currentUser = match;
      return res.json(req.session.currentUser);
    })
    .catch((err) => res.json(err));
});

router.get("/checkuser", (req, res) => {
  return res.json(req.session.currentUser);
});

module.exports = router;
