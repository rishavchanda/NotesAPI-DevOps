import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema(
  {
    noteTitle: { type: String, required: true },
    noteDescription: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Notes", NotesSchema);
