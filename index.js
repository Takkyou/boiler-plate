const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
require("dotenv").config();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
