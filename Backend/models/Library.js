import mongoose from "mongoose";

const LibrarySchema = mongoose.Schema(
  {
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Books" }],
  },
  { timestamps: true }
);

const LibraryModel = mongoose.model("library", LibrarySchema);

export default LibraryModel;
