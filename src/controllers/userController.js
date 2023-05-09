const UserService = require("../services/userService");

const userService = new UserService();

class UserController {
  constructor() {}

  async signup(req, res) {
    try {
      // req -> {username: ,password ,role: }
      // console.log(req.body);
      const response = await userService.signup({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
      });
      return res.status(201).json({
        message: "Successfully Signed Up User",
        data: response,
        success: true,
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something Went Wrong",
        data: {},
        success: false,
        err: error,
      });
    }
  }

  async signin(req, res) {
    try {
      const user = await userService.signin(req.body);
      return res.status(200).json({
        success: true,
        message: "Successfully logged In",
        data: user,
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something Went Wrong",
        data: {},
        success: false,
        err: error,
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const response = await userService.getAllUsers();
      return res.status(201).json({
        message: "Successfully fetched users",
        data: response,
        success: true,
        err: {},
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something Went Wrong",
        data: {},
        success: false,
        err: error,
      });
    }
  }
}

module.exports = UserController;
