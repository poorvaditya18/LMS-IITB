const passport = require("passport");

const authenticateUser = (req, res, next) => {
  try {
    passport.authenticate("jwt", (err, user) => {
      if (err) next(err);
      if (!user) {
        return res.status(401).json({
          message: "Unauthenticated User",
        });
      }
      req.user = user;
      next();
    })(req, res, next);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { authenticateUser };
