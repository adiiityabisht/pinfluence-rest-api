const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Done!");
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});
