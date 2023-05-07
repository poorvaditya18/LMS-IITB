const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/userController");

const userController = new UserController();

// get all users ->
router.get("/", userController.getAllUsers);



// signup -->
router.post("/signup", userController.signup);

// signin -->
router.post("/signin", userController.signin);

module.exports = router;
