const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://takelucky777:dksk21121234$a@cluster0.cg3wch9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB");
  });

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
