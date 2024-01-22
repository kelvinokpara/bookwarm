import express from "express";
import {
  createLibrary,
  decrementLibrary,
  getAllLibraries,
  getUserLibrary,
  incrementLibrary,
} from "../Controllers/Library/Library.js";
import { authorizeUser } from "../middleware/authorizeUser.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.route("/").get(verifyUser, authorizeUser(["admin"]), getAllLibraries);

router.route("/:user").get(getUserLibrary).post(verifyUser, createLibrary);

router.route("/inc/:user").post(incrementLibrary);

router.route("/dec/:user").post(decrementLibrary);

export default router;
