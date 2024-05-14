const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("Hello Express.js");
});

app.get("/api", (req, res) => {
  res.send("Bu api routessss");
});

app.listen(5000, () => {
  connect();
  console.log(`sunucu ${5000} portunda cslisiyor`);
});
