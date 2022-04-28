import { createSlice } from '@reduxjs/toolkit';

import findDates from '../helpers/findDates';

const noteSlice = createSlice({
  name: 'note',
  initialState: {
    notes: []
  },
  reducers: {
    replaceNotes(state, action) {
      state.notes = action.payload.map((note) => {
        note.dates = findDates(note.content);

        return note;
      });
    },
    editNote(state, action) {
      const newNote = action.payload;
      const existingNoteIdx = state.notes.findIndex((note) => note._id === newNote._id);

      newNote.dates = findDates(newNote.content);
      state.notes[existingNoteIdx] = newNote;
    },
    addNote(state, action) {
      const newNote = action.payload;

      newNote.dates = findDates(newNote.content);
      state.notes.push(newNote);
    },
    archiveNote(state, action) {
      const { id, archivate } = action.payload;
      const existingNote = state.notes.find((note) => note._id === id);

      existingNote.archived = archivate;
    },
    archiveAllNotes(state, action) {
      state.notes = state.notes.map((note) => {
        note.archived = action.payload;

        return note;
      });
    },
    deleteNote(state, action) {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note._id !== id);
    },
    deleteNotes(state, action) {
      state.notes = state.notes.filter((note) => note.archived !== action.payload);
    }
  }
});

export const noteActions = noteSlice.actions;

export default noteSlice;
