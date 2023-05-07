const { PORT } = require("./config/serverConfig");
const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./config/database");
const passport = require("passport");

const apiRoutes = require("../src/routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/apiRoutes", apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server started on ${PORT}`);
  await connect();
  console.log("MongoDB connected successfully");
});
