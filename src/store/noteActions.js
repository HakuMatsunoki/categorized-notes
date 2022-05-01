import { noteActions } from './noteSlice';
import { uiActions } from './uiSlice';
import fetchData from '../helpers/fetchData';

export const fetchNotes = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData('https://categorized-notes-api.herokuapp.com/api/notes');

      const notes = response.data || [];

      dispatch(noteActions.replaceNotes(notes));
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 3000);
    }
  };
};

export const addNote = (note) => {
  return async (dispatch) => {
    try {
      const id = note._id;
      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id ? id : ''}`;
      const newNote = JSON.stringify({
        name: note.name,
        category: note.category,
        content: note.content
      });

      const response = await fetchData(url, {
        method: id ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newNote
      });

      dispatch(uiActions.setInfo({ title: 'Saved.', message: 'Note saved.' }));

      const noteData = response.data;
      delete noteData.__v;

      dispatch(id ? noteActions.editNote(noteData) : noteActions.addNote(noteData));

      setTimeout(() => {
        dispatch(uiActions.hideInfo());
      }, 3000);
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 4000);
    }
  };
};

export const archiveAllNotes = (archivate) => {
  return async (dispatch) => {
    try {
      dispatch(noteActions.archiveAllNotes(archivate));

      const sendData = JSON.stringify({ archived: archivate });
      const url = 'https://categorized-notes-api.herokuapp.com/api/notes';

      await fetchData(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(uiActions.setInfo({ title: 'Saved.', message: `All notes ${archivate ? '' : 'un'}archived.` }));
      setTimeout(() => {
        dispatch(uiActions.hideInfo());
      }, 3000);
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 4000);
    }
  };
};

export const deleteNotes = (archived) => {
  return async (dispatch) => {
    try {
      dispatch(noteActions.deleteNotes(archived));

      const sendData = JSON.stringify({ archived });
      const url = 'https://categorized-notes-api.herokuapp.com/api/notes';

      await fetchData(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(uiActions.setInfo({ title: 'Saved.', message: `All ${archived ? '' : 'un'}archived notes deleted.` }));
      setTimeout(() => {
        dispatch(uiActions.hideInfo());
      }, 3000);
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 4000);
    }
  };
};

export const archiveNote = (id, archivate) => {
  return async (dispatch) => {
    try {
      dispatch(noteActions.archiveNote({ id, archivate }));

      const sendData = JSON.stringify({ archived: archivate });
      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id}`;

      await fetchData(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData
      });

      dispatch(uiActions.setInfo({ title: 'Saved.', message: `Note ${archivate ? '' : 'un'}archived.` }));
      setTimeout(() => {
        dispatch(uiActions.hideInfo());
      }, 3000);
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 4000);
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    try {
      dispatch(noteActions.deleteNote(id));

      const url = `https://categorized-notes-api.herokuapp.com/api/notes/${id}`;

      await fetchData(url, {
        method: 'DELETE'
      });

      dispatch(uiActions.setInfo({ title: 'Saved.', message: 'Note deleted.' }));
      setTimeout(() => {
        dispatch(uiActions.hideInfo());
      }, 3000);
    } catch (err) {
      dispatch(uiActions.setError({ message: err.message }));

      setTimeout(() => {
        dispatch(uiActions.hideError());
      }, 4000);
    }
  };
};
