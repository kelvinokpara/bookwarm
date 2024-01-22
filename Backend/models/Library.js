import mongoose from "mongoose";

const LibrarySchema = mongoose.Schema(
  {
    user: { type: String, required: true },
    library: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  },
  { timestamps: true }
);

const LibraryModel = mongoose.model("library", LibrarySchema);

export default LibraryModel;
