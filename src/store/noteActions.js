import { noteActions } from './noteSlice';
import fetchData from '../helpers/fetchData';

export const fetchNotes = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData('https://categorized-notes-api.herokuapp.com/api/notes');

      const notes = response.data || [];

      dispatch(noteActions.replaceNotes(notes));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNote = (note) => {
  return async (dispatch) => {
    try {
      const id = note._id;
      const newNote = JSON.stringify({
        name: note.name,
        category: note.category,
        content: note.content
      });

      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id ? id : ''}`;

      const response = await fetchData(url, {
        method: id ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newNote
      });

      const noteData = response.data;
      delete noteData.__v;

      dispatch(id ? noteActions.editNote(noteData) : noteActions.addNote(noteData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const archiveAllNotes = (archivate) => {
  return async (dispatch) => {
    try {
      const sendData = JSON.stringify({
        archived: archivate
      });

      const url = 'https://categorized-notes-api.herokuapp.com/api/notes';

      await fetchData(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(noteActions.archiveAllNotes(archivate));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteNotes = (archived) => {
  return async (dispatch) => {
    try {
      const sendData = JSON.stringify({ archived });
      const url = 'https://categorized-notes-api.herokuapp.com/api/notes';

      await fetchData(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(noteActions.deleteNotes(archived));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const archiveNote = (id, archivate) => {
  return async (dispatch) => {
    try {
      const sendData = JSON.stringify({ archived: archivate });

      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id}`;

      await fetchData(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(noteActions.archiveNote({ id, archivate }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id}`;

      await fetchData(url, {
        method: 'DELETE'
      });

      dispatch(noteActions.deleteNote(id));
    } catch (err) {
      console.log(err);
    }
  };
};
