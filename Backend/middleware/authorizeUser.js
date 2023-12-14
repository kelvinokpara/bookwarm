import httpStatus from "http-status";

export const authorizeUser = (permittedRoles) => {
  return (req, res, next) => {
    if (!permittedRoles.includes(req.user.role)) {
      res.status(httpStatus.BAD_REQUEST).json({
        status: "error",
        data: `User with role ${
          req.user.role
        } is not permitted on the endpoint. Only ${permittedRoles.join(",")} ${
          permittedRoles.length > 1 ? "are" : "is"
        } allowed`,
      });
      return;
    }
    next();
  };
};
