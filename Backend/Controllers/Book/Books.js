import BookModel from "../../models/Book.js";
import httpStatus from "http-status";
import UserModel from "../../models/User.js";

export const createBook = async (req, res) => {
  const data = req.body;

  const bookExist = await BookModel.findOne({ url: data.url });
  if (bookExist) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      data: "book already exists",
    });
    return;
  }

  const createdBook = await BookModel.create({
    id: data.id,
    title: data.title,
    subtitle: data.subtitle,
    authors: data.authors,
    image: data.image,
    url: data.url,
    category: data.category,
  });

  res.status(httpStatus.OK).json({
    status: "success",
    data: createdBook,
  });
};

export const getBooks = async (req, res) => {
  const books = await BookModel.find();

  res.status(httpStatus.OK).json({
    status: "success",
    data: books,
  });
};

export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findOne({ _id: id });

    res.status(httpStatus.OK).json({
      status: "success",
      data: book,
    });
    return;
  } catch (error) {
    res.status(httpStatus.OK).json({
      status: "success",
      data: error.message,
    });
  }
};
