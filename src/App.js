import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainTable from './components/Tables/MainTable';
import StatsTable from './components/Tables/StatsTable';
import ArchivedTable from './components/Tables/ArchivedTable';
import Button from './components/Buttons/Button';
import NewNote from './components/Forms/NewNote';
import ErrorNotification from './components/Notifications/ErrorNotification';
import InfoNotification from './components/Notifications/InfoNotification';
import calcStats from './helpers/calcStats';
import findDates from './helpers/findDates';
import { addNote, fetchNotes } from './store/noteActions';
import classes from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.note.notes);
  // const error = useSelector((state) => state.ui.error);
  const [edit, setEdit] = useState(false);
  const [editedItem, setEditedItem] = useState(false);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const mainList = list.filter((item) => !item.archived);
  const archivedList = list.filter((item) => item.archived);
  const stats = calcStats(list);

  const editToggle = () => {
    setEdit((prevState) => !prevState);
    setEditedItem(false);
  };

  const saveNewNote = (newNote) => {
    newNote.dates = findDates(newNote.content);

    dispatch(addNote(newNote));
  };

  const editHandler = (item) => {
    setEdit(true);
    setEditedItem(item);
  };

  return (
    <div className={classes.container}>
      <ErrorNotification />
      <InfoNotification />
      <h1>Categorized notes app =^^=</h1>
      <MainTable items={mainList} onEdit={editHandler} />
      {edit && <NewNote editToggle={editToggle} onNewNote={saveNewNote} editedNote={editedItem} />}
      {!edit && <Button title="New note" onClick={editToggle} />}
      <h2>Statistics: </h2>
      <StatsTable items={stats} />
      <h2>Archive:</h2>
      <ArchivedTable items={archivedList} />
    </div>
  );
};

export default App;
