import express from "express";
import { searchBooks } from "../Controllers/Search/Search.js";

const router = express.Router();

router.route("/").get(searchBooks);

export default router;
