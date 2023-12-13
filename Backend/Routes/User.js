import express from "express";
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  loginUser,
  updateUser,
} from "../Controllers/User/user.js";

const router = express.Router();

router.route("/").get(getUsers).post(createUser);

router.route("/login").post(loginUser);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

export default router;
