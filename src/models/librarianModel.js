const mongoose = require("mongoose");

const librarianSchema = mongoose.Schema({
  userId: {
    ref: "User",
  },
});

const Librarian = mongoose.model("Librarian", librarianSchema);
module.exports = Librarian;
