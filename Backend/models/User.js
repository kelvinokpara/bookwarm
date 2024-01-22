import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      min: 6,
      max: 26,
      required: [true, "Please supply the username"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please supply the email"],
    },
    role: {
      type: String,
      enum: ["regular", "admin", "librarian"],
      default: "regular",
    },
    password: { type: String, required: true },
  },
  { timestamp: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
