const jwt = require("jsonwebtoken");
const CustomError = require("../utils/CustomError");
const Admin = require("../models/Admin");

exports.loginReq = (req, res, next) => {
  const token = req.header["x-auth-token"] || req.headers["authorization"];
  if (!token)
    return next(new CustomError("A token is required for authentication", 403));

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  } catch (e) {
    return next(new CustomError("Invalid Token", 401));
  }
  return next();
};

exports.adminReq = async (req, res, next) => {
  const token = req.header["x-auth-token"] || req.headers["authorization"];
  if (!token)
    return next(new CustomError("A token is required for authentication", 403));

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  } catch (e) {
    return next(new CustomError("Invalid Token", 401));
  }

  //  check for admin
  const admin = await Admin.find({ owner: req.user.id });
  console.log(admin);
  return next();
};
