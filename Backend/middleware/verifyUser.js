import httpStatus from "http-status";
import JWT from "jsonwebtoken";
import UserModel from "../models/User";

export const verifyUser = async (req, res, next) => {
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "Authorization failed. Token is required.",
    });
    return;
  }

  const token = req.headers.authorization.split(" ")[1];

  const decodedToken = JWT.decode(token, process.env.JWT_SECRET);

  if (!decodedToken) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "Authorization failed, Token is invalid",
    });
    return;
  }

  const user = await UserModel.findById(decodedToken.id);

  if (!user) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      message: "Authorization failed, User not found",
    });
    return;
  }

  req.user = user;

  next();
};
