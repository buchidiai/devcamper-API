const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  let auth = req.headers.authorization;

  if (auth && auth.startsWith("Bearer")) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(" ")[1];
  }

  // Make sure token exists
  if (!token) {
    return next(
      new ErrorResponse("Not authorized to access this route a", 401)
    );
  }

  console.log(token, "token before decode");

  try {
    // Verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded, "decoded");

    req.user = await User.findById(decoded.id);

    console.log(req.user, " req.user");

    next();
  } catch (err) {
    return next(
      new ErrorResponse("Not authorized to access this route b", 401)
    );
  }
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
