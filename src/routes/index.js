const express = require("express");

const router = express.Router();

const librarianRoutes = require("./librarian/index.js");
const userRoutes = require("./user/index.js");
const memberRoutes = require("./member/index.js");
// const memberRoutes = require("./member/index.js");

router.use("/librarian", librarianRoutes);
router.use("/user", userRoutes);
router.use("/member", memberRoutes);
// router.use("/member", memberRoutes);

module.exports = router;
