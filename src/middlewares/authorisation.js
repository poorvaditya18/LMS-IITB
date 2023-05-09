const authorisation = (req, res, next) => {
  try {
    console.log(req.user);
    // req.user
    const role = req.user.role;
    if (role != "librarian") {
      return res.status(401).json({
        message: "Unauthorised User",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const authorisationMember = (req, res, next) => {
  try {
    console.log(req.user);
    // req.user
    const role = req.user.role;
    if (role != "member") {
      return res.status(401).json({
        message: "Unauthorised User",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = { authorisation, authorisationMember };
