import classes from './BaseTableHead.module.css';

const BaseTableHead = (props) => {
  return <div className={classes.table__head}>{props.children}</div>;
};

export default BaseTableHead;
