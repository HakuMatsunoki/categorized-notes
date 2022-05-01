import React from 'react';
import { useSelector } from 'react-redux';

import BaseNotification from '../UI/BaseNotification';
import classes from './ErrorNotification.module.css';

const ErrorNotification = () => {
  const error = useSelector((state) => state.ui.error);

  return <BaseNotification className={classes.error} message={error.message} show={error.show} title={'Error!'} />;
};

export default ErrorNotification;
