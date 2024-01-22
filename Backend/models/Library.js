import mongoose from "mongoose";

const LibrarySchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    library: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

const LibraryModel = mongoose.model("library", LibrarySchema);

export default LibraryModel;
