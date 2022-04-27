import classes from './BaseTable.module.css';

const Table = (props) => {
  return <div className={classes.table}>{props.children}</div>;
};

export default Table;
