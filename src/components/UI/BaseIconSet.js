import classes from './BaseIconSet.module.css';

const BaseIconSet = (props) => {
  return <div className={classes['table__icon-set']}>{props.children}</div>;
};

export default BaseIconSet;
