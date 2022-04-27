import { ReactComponent as ReactSprite } from '../../SVG/icons.svg';
import classes from './TableIcon.module.css';

const TableIcon = (props) => {
  return (
    <div className={classes.table__icon}>
      <svg className={classes.icon}>
        <ReactSprite />
        <use xlinkHref={`#icon-${props.category}`}></use>
      </svg>
    </div>
  );
};

export default TableIcon;
