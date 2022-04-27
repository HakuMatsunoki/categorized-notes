import classes from './BaseIcon.module.css';

const BaseIcon = (props) => {
  return (
    <div className={classes.table__action}>
      <svg className={classes.icon} onClick={props.action}>
        {props.children}
      </svg>
    </div>
  );
};

export default BaseIcon;
