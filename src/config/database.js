const mongoose = require("mongoose");
const { MONGODBURL } = require("./serverConfig");
const connect = async () => {
  await mongoose.connect(MONGODBURL);
};

module.exports = {
  connect,
};
