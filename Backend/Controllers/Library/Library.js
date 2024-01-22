import LibraryModel from "../../models/Library.js";
import httpStatus from "http-status";

export const createLibrary = async (req, res) => {
  const libUser = req.params.user;
  // const libData = req.body || "";

  const libExist = await LibraryModel.findOne({ user: libUser });

  console.log(libExist, "liiiiiiiiibb");
  if (libExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "user already has a library.",
    });
    return;
  }

  const newLibrary = await LibraryModel.create({
    user: libUser,
  });

  // const newLib = new LibraryModel({
  //   user: libUser,
  //   library: [],
  // });

  // const savedLib = newLib.save();

  res.status(httpStatus.CREATED).json({
    status: "success",
    data: newLibrary,
  });
};

export const incrementLibrary = async (req, res) => {
  const libUser = req.params.user;
  const bookId = req.body.bookId;

  const libDoc = await LibraryModel.findOne({ user: libUser });

  if (!libDoc) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      data: "user's library not found",
    });
    return;
  }

  const bookExist = await LibraryModel.findOne({ library: bookId });
  if (bookExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "Book already exists in user's library",
    });
    return;
  }

  libDoc.library.push(bookId);
  const updatedLibrary = await libDoc.save();
  res.status(httpStatus.OK).json({
    status: "success",
    data: updatedLibrary,
  });
};

export const decrementLibrary = async (req, res) => {
  const libUser = req.params.user;
  const bookId = req.body.bookId;

  const libDoc = await LibraryModel.findOne({ user: libUser });

  if (!libDoc) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      data: "user's library not found",
    });
    return;
  }

  libDoc.library.pull(bookId);
  const updatedLibrary = await libDoc.save();
  res.status(httpStatus.OK).json({
    status: "success",
    data: updatedLibrary,
  });
};

export const getUserLibrary = async (req, res) => {
  const libUser = req.params.user;

  const libDoc = await LibraryModel.findOne({ user: libUser }).populate("");

  if (!libDoc) {
    res.status(httpStatus.NOT_FOUND).json({
      status: "error",
      data: "user's library not found",
    });
    return;
  }

  res.status(httpStatus.OK).json({
    status: "success",
    data: libDoc,
  });
};

export const getAllLibraries = async (req, res) => {
  const libraries = await LibraryModel.find();
  res.status(httpStatus.OK).json({
    status: "success",
    data: libraries,
  });
};
