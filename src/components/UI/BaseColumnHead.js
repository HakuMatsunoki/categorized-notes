import classes from './BaseColumnHead.module.css';

const BaseColumnHead = (props) => {
  return <div className={classes['table__column-head']}>{props.title}</div>;
};

export default BaseColumnHead;
