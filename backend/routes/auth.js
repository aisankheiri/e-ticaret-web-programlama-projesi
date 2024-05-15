const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

const generateRadomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

//kullanici olusturma (Create - Register)

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const defaultAvatar = generateRadomAvatar();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Email adress is already registerd!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });
    await newUser.save();

    res.status(201).json(newUser);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
