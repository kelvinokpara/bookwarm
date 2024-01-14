import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please provide title"] },
    subtitle: { type: String },
    authors: { type: String, required: [true, "Name of author is required"] },
    image: { type: String, required: [true, "please provide image url"] },
    url: {
      type: String,
      required: [true, "please provide image url"],
      unique: true,
    },
    category: {
      type: String,
      enum: ["action", "romance", "horror", "slice of life", "general"],
      default: "general",
    },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamp: true }
);

const BookModel = mongoose.model("Book", BookSchema);

export default BookModel;
