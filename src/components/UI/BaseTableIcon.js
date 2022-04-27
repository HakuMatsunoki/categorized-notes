import classes from './BaseTableIcon.module.css';

const BaseTableIcon = (props) => {
  return <div className={classes.table__icon}>{props.children}</div>;
};

export default BaseTableIcon;
