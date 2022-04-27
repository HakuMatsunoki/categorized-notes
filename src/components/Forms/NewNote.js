import { useState } from 'react';

import Button from '../Buttons/Button';
import classes from './NewNote.module.css';

const NewNote = (props) => {
  const [enteredName, setEnteredName] = useState(props.editedNote ? props.editedNote.name : '');
  const [enteredContent, setEnteredContent] = useState(props.editedNote ? props.editedNote.content : '');
  const [enteredCategory, setEnteredCategory] = useState(
    props.editedNote ? props.editedNote.category.toLowerCase() : 'thought'
  );

  const cancel = () => {
    setEnteredName('');
    setEnteredContent('');
    setEnteredCategory('thought');

    props.editToggle();
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const save = () => {
    const newNote = {
      name: enteredName,
      category: enteredCategory.toUpperCase(),
      content: enteredContent
    };

    if (props.editedNote._id) {
      newNote._id = props.editedNote._id;
    }

    props.onNewNote(newNote);
    cancel();
  };

  return (
    <div>
      <div className={classes.input}>
        <div className={classes.field}>
          <input type="text" placeholder="Name" required onChange={nameChangeHandler} value={enteredName} />
        </div>
        <div className={classes.textarea}>
          <textarea
            placeholder="Type something here.."
            required
            onChange={contentChangeHandler}
            value={enteredContent}
          ></textarea>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="category"
              value="task"
              id="task"
              onChange={categoryChangeHandler}
              checked={enteredCategory === 'task'}
            />
            <label htmlFor="task">Task</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="thought"
              id="thought"
              onChange={categoryChangeHandler}
              checked={enteredCategory === 'thought'}
            />
            <label htmlFor="thought">Random thought</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="quote"
              id="quote"
              onChange={categoryChangeHandler}
              checked={enteredCategory === 'quote'}
            />
            <label htmlFor="quote">Quote</label>
          </div>
          <div>
            <input
              type="radio"
              name="category"
              value="idea"
              id="idea"
              onChange={categoryChangeHandler}
              checked={enteredCategory === 'idea'}
            />
            <label htmlFor="idea">Idea</label>
          </div>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button title="Save" onClick={save} />
        <Button title="Cancel" onClick={cancel} />
      </div>
    </div>
  );
};

export default NewNote;
