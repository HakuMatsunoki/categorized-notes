import { useDispatch } from 'react-redux';

import TableIcon from '../Icons/TableIcon';
import BaseIconSet from '../UI/BaseIconSet';
import IconEdit from '../Icons/IconEdit';
import IconArchive from '../Icons/IconArchive';
import IconDelete from '../Icons/IconDelete';
import { icons, categories } from '../../constants/enums';
import classes from './TableRow.module.css';
import { archiveNote, deleteNote } from '../../store/noteActions';

const TableRow = (props) => {
  const dispatch = useDispatch();
  const item = props.item;

  const archHandler = () => {
    dispatch(archiveNote(props.item._id, true));
  };

  const unarchHandler = () => {
    dispatch(archiveNote(props.item._id, false));
  };

  const delHandler = () => {
    dispatch(deleteNote(props.item._id));
  };

  const editHandler = () => {
    props.onEdit(props.item);
  };

  if (props.archived)
    return (
      <div className={classes.table__row}>
        <TableIcon category={icons[item.category]} />
        <div className={classes.table__column}>{item.name}</div>
        <div className={classes.table__column}>{new Date(item.created).toLocaleDateString('en-GB')}</div>
        <div className={classes.table__column}>{categories[item.category]}</div>
        <BaseIconSet>
          <IconArchive onArch={unarchHandler} />
          <IconDelete onDel={delHandler} />
        </BaseIconSet>
      </div>
    );

  if (props.stats)
    return (
      <div className={classes.table__row}>
        <TableIcon category={icons[item.category]} />
        <div className={classes.table__column}>{item.category}</div>
        <div className={classes.table__column}>{item.active}</div>
        <div className={classes.table__column}>{item.archive}</div>
      </div>
    );

  return (
    <div className={classes.table__row}>
      <TableIcon category={icons[item.category]} />
      <div className={classes.table__column}>{item.name}</div>
      <div className={classes.table__column}>{new Date(item.created).toLocaleDateString('en-GB')}</div>
      <div className={classes.table__column}>{categories[item.category]}</div>
      <div className={classes.table__column}>{item.content}</div>
      <div className={classes.table__column}>{item.dates}</div>
      <BaseIconSet>
        <IconEdit onEdit={editHandler} />
        <IconArchive onArch={archHandler} />
        <IconDelete onDel={delHandler} />
      </BaseIconSet>
    </div>
  );
};

export default TableRow;
