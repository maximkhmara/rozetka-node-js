const express = require("express");
const cors = require("cors");

const indexRouter = require("./routes/index");
const loginRouter = require("./src/login/login.routing");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/", indexRouter);
app.use("/login", loginRouter);

module.exports = app;
