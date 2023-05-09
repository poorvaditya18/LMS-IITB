const validateAddBook = (req, res, next) => {
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({
      data: {},
      success: true,
      message: "Invalid Request Body for create Book",
      err: "Missing mandatory properties to create a Book",
    });
  }
  // if every details is present the call the next middleware
  next();
};

module.exports = {
  validateAddBook,
};
