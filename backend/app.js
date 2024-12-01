const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectedToDbb = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require('cookie-parser');

connectedToDbb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello krishnkant")
});
app.use("/users", userRoutes);

module.exports = app;