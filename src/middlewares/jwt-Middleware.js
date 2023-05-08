const JWT = require("passport-jwt");

const User = require("../models/userModel");

const JWTStrategy = JWT.Strategy;

const ExtractJWT = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "library_secret",
};

// logic to validate the token -->
const passportAuth = (passport) => {
  try {
    passport.use(
      new JWTStrategy(opts, async (jwt_payload, done) => {
        console.log(jwt_payload);
        const user = await User.findById(jwt_payload.id);
        if (!user) {
          done(null, false);
        } else {
          done(null, user);
        }
      })
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  passportAuth,
};
