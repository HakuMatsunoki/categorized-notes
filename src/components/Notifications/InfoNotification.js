import React from 'react';
import { useSelector } from 'react-redux';

import BaseNotification from '../UI/BaseNotification';
import classes from './InfoNotification.module.css';

const InfoNotification = () => {
  const info = useSelector((state) => state.ui.info);

  return <BaseNotification className={classes.info} show={info.show} title={info.title} message={info.message} />;
};

export default InfoNotification;
