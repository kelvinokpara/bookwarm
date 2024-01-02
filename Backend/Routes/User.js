import express from "express";
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  loginUser,
  updateUser,
} from "../Controllers/User/user.js";

// import schema
import {
  createUserSchema,
  loginUserSchema,
  getUserSchema,
} from "../Controllers/User/userSchema.js";
// import middlewares
import { validationMiddleware } from "../middleware/validation.js";
import { verifyUser } from "../middleware/verifyUser.js";
import { authorizeUser } from "../middleware/authorizeUser.js";

const router = express.Router();

router
  .route("/")
  .get(verifyUser, authorizeUser(["admin", "regular"]), getUsers)
  .post(validationMiddleware(createUserSchema), createUser);

router.route("/login").post(validationMiddleware(loginUserSchema), loginUser);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

export default router;
