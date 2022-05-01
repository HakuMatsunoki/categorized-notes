import React from 'react';

import classes from './BaseNotification.module.css';

const BaseNotification = (props) => {
  const messageClasses = `${classes.message} ${props.className} ${props.show ? classes.show : classes.hide}`;

  return (
    <div className={messageClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default BaseNotification;
