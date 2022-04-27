import { useDispatch } from 'react-redux';

import BaseTable from '../UI/BaseTable';
import BaseTableHead from '../UI/BaseTableHead';
import BaseTableIcon from '../UI/BaseTableIcon';
import BaseColumnHead from '../UI/BaseColumnHead';
import BaseIconSet from '../UI/BaseIconSet';
import IconArchive from '../Icons/IconArchive';
import IconDelete from '../Icons/IconDelete';
import IconEmpty from '../Icons/IconEmpty';
import TableContent from './TableContent';
import { archiveAllNotes, deleteNotes } from '../../store/noteActions';

const MainTable = (props) => {
  const dispatch = useDispatch();

  const archAllHandler = () => {
    dispatch(archiveAllNotes(true));
  };

  const delAllHandler = () => {
    dispatch(deleteNotes(false));
  };

  return (
    <BaseTable>
      <BaseTableHead>
        <BaseTableIcon />
        <BaseColumnHead title="Name" />
        <BaseColumnHead title="Created" />
        <BaseColumnHead title="Category" />
        <BaseColumnHead title="Content" />
        <BaseColumnHead title="Dates" />
        <BaseIconSet>
          <IconEmpty />
          <IconArchive onArch={archAllHandler} />
          <IconDelete onDel={delAllHandler} />
        </BaseIconSet>
      </BaseTableHead>
      <TableContent items={props.items} onEdit={props.onEdit} />
    </BaseTable>
  );
};

export default MainTable;
