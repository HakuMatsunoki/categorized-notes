import { useDispatch } from 'react-redux';

import BaseTable from '../UI/BaseTable';
import BaseTableHead from '../UI/BaseTableHead';
import BaseTableIcon from '../UI/BaseTableIcon';
import BaseColumnHead from '../UI/BaseColumnHead';
import BaseIconSet from '../UI/BaseIconSet';
import IconArchive from '../Icons/IconArchive';
import IconDelete from '../Icons/IconDelete';
import TableContent from './TableContent';
import { deleteNotes, archiveAllNotes } from '../../store/noteActions';

const ArchivedTable = (props) => {
  const dispatch = useDispatch();

  const unarchAllHandler = () => {
    dispatch(archiveAllNotes(false));
  };

  const delAllHandler = () => {
    dispatch(deleteNotes(true));
  };

  return (
    <BaseTable>
      <BaseTableHead>
        <BaseTableIcon />
        <BaseColumnHead title="Name" />
        <BaseColumnHead title="Created" />
        <BaseColumnHead title="Category" />
        <BaseIconSet>
          <IconArchive onArch={unarchAllHandler} />
          <IconDelete onDel={delAllHandler} />
        </BaseIconSet>
      </BaseTableHead>
      <TableContent items={props.items} archived={true} />
    </BaseTable>
  );
};

export default ArchivedTable;
