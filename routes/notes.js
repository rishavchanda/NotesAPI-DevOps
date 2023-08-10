import express from "express";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  ping,
} from "../controllers/notes.js";

const router = express.Router();

router.get("/ping", ping);
router.get("/notes", getNotes);
router.post("/notes", createNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;
