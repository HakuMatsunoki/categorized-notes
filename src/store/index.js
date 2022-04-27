// import { createStore } from "redux";

// const DUMMY_DATA = [
//   {
//     id: 1,
//     name: "List1",
//     created: 1640794362988,
//     category: "TASK",
//     content: "I’m gonna have a dentist appointment on the 03/12/1921",
//     archived: false,
//     dates: "03/12/1921"
//   },
//   {
//     id: 2,
//     name: "List2",
//     created: 1540792222889,
//     category: "THOUGHT",
//     content:
//       "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
//     archived: false,
//     dates: "3/5/2021, 5/5/2021"
//   },
//   {
//     id: 3,
//     name: "List3",
//     created: 1340711169812,
//     category: "IDEA",
//     content:
//       "I’m gonna have a dentist appointment on the 11/12/2002, I moved it from 1/05/2005",
//     archived: false,
//     dates: "11/12/2002, 1/05/2005"
//   },
//   {
//     id: 4,
//     name: "List4",
//     created: 1640794361,
//     category: "QUOTE",
//     content: "I’m gonna have a dentist appointment on, I moved it..",
//     archived: false,
//     dates: ""
//   },
//   {
//     id: 5,
//     name: "List5",
//     created: 1640733362,
//     category: "QUOTE",
//     content:
//       "I’m gonna have a dentist appointment on the 13/5/2021, I moved it from 22/5/2021",
//     archived: true,
//     dates: "13/5/2021, 22/5/2021"
//   }
// ];

// const notes = (state = { notes: DUMMY_DATA }, action) => {
//   if (action.type === "push") state.notes.push(action.newNote);

//   if (action.type === "archAll")
//     return {
//       notes: state.notes.map((item) => ({
//         ...item,
//         archived: !action.archived
//       }))
//     };

//   if (action.type === "delAll")
//     return {
//       notes: state.notes.filter((item) => item.archived !== action.archived)
//     };

//   if (action.type === "arch") {
//     const archIdx = state.notes.findIndex((item) => item.id === action.id);
//     state.notes[archIdx].archived = true;

//     return {
//       notes: [...state.notes]
//     };
//   }

//   if (action.type === "unarch") {
//     const archIdx = state.notes.findIndex((item) => item.id === action.id);
//     state.notes[archIdx].archived = false;

//     return {
//       notes: [...state.notes]
//     };
//   }

//   if (action.type === "del")
//     return {
//       notes: state.notes.filter((item) => item.id !== action.id)
//     };

//   return state;
// };

// const store = createStore(notes);

// export default store;

import { configureStore } from '@reduxjs/toolkit';

import noteSlice from './noteSlice';

const store = configureStore({
  reducer: {
    note: noteSlice.reducer
  }
});

export default store;
