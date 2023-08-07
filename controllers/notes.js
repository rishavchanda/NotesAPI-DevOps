import notes from "../models/notes.js";

// Get all notes
export const getNotes = (req, res) => {
  notes
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
      res.status(500).json({
        message: "Error retrieving notes",
      });
    });
};

// Get a single note
export const getNote = (req, res) => {
  notes
    .findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Note with id ${req.params.id} not found`,
        });
      } else {
        res.status(200).json(data);
      }
    })
    .catch((err) => {
      console.log("Error: ", err.message);
      res.status(500).json({
        message: "Error retrieving note",
      });
    });
};

// Create a new note
export const createNote = (req, res) => {
  const note = new notes({
    noteTitle: req.body.noteTitle,
    noteDescription: req.body.noteDescription,
  });

  note
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Note created successfully",
        data,
      });
    })
    .catch((err) => {
      console.log("Error: ", err.message);
      res.status(500).json({
        message: "Error creating note",
      });
    });
};

// Update a note
export const updateNote = (req, res) => {
  notes
    .findByIdAndUpdate(req.params.id, {
      noteTitle: req.body.noteTitle,
      noteDescription: req.body.noteDescription,
    })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Note with id ${req.params.id} not found`,
        });
      } else {
        res.status(200).json({
          message: "Note updated successfully",
        });
      }
    })
    .catch((err) => {
      console.log("Error: ", err.message);
      res.status(500).json({
        message: "Error updating note",
      });
    });
};

// Delete a note
export const deleteNote = (req, res) => {
  notes
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: `Note with id ${req.params.id} not found`,
        });
      } else {
        res.status(200).json({
          message: "Note deleted successfully",
        });
      }
    })
    .catch((err) => {
      console.log("Error: ", err.message);
      res.status(500).json({
        message: "Error deleting note",
      });
    });
};
