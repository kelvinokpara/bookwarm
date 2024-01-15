import httpStatus from "http-status";
import BookModel from "../../models/Book.js";

export const searchBooks = async (req, res) => {
  const query = req.query.key ?? "";
  try {
    const books = await BookModel.find({
      title: { $regex: query, $options: "i" },
    });

    res.status(httpStatus.OK).json({
      status: "success",
      data: books,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: error.message,
    });
  }
};
