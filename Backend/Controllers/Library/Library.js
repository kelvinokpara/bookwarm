import LibraryModel from "../../models/Library.js";
import httpStatus from "http-status";

export const createLibrary = () => {
  const libUser = req.user;
  const libData = req.body;

  const libExist = LibraryModel.findOne({ user: libUser });

  if (libExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "user already has a cart.",
    });
    return;
  }

  const newLibrary = LibraryModel.create({
    user: libUser,
    library: [{ libData }],
  });
  res.status(httpStatus.CREATED).json({
    status: "success",
    data: newLibrary,
  });
};
