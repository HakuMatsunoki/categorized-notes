import React from 'react';

import classes from './ErrorNotification.module.css';

const ErrorNotification = (props) => {
  const errorClasses = `${classes.error} ${props.show ? classes.show : classes.hide}`;

  return (
    <div className={errorClasses}>
      <h2>Error!</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorNotification;
