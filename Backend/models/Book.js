import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, "Please provide title"] },
    subtitle: { type: String },
    description: { type: String },
    authors: { type: String, required: [true, "Name of author is required"] },
    publisher: { type: String },
    pages: { type: String },
    year: { type: String },

    image: { type: String, required: [true, "please provide image url"] },
    url: {
      type: String,
      required: [true, "please provide image url"],
      unique: true,
    },
    category: {
      type: String,
      enum: ["action", "romance", "horror", "general", "technology"],
      default: "general",
    },
  },
  { timestamp: true }
);

const BookModel = mongoose.model("Book", BookSchema);

export default BookModel;
