import express from "express";
import {
  createBook,
  getBooks,
  getSingleBook,
} from "../Controllers/Book/Books.js";

const router = express.Router();

router.route("/").post(createBook).get(getBooks);

router.route("/:id").get(getSingleBook);

export default router;
