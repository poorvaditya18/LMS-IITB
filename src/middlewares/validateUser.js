// to check whether user exists in UserModel and have its role as member
const UserService = require("../services/userService");
const userService = new UserService();
const validateUser = async (req, res, next) => {
  // check user as per the username
  const username = req.body.username;
  const user = await userService.getUserByUsername(username);
  console.log(user);

  if (user && user.role === "member") {
    // if user already exists
    return res.status(400).json({
      data: {},
      success: true,
      message: "user already exists",
      err: "cannot create user",
    });
  }
  next();
};

module.exports = validateUser;
