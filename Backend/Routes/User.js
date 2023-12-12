import express from "express";
import {
  createUser,
  getSingleUser,
  getUsers,
  updateUser,
} from "../Controllers/User/user.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getSingleUser).patch(updateUser);

export default router;
