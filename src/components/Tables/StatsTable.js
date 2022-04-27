import BaseTable from "../UI/BaseTable";
import BaseTableHead from "../UI/BaseTableHead";
import BaseTableIcon from "../UI/BaseTableIcon";
import BaseColumnHead from "../UI/BaseColumnHead";
import TableContent from "./TableContent";

const StatsTable = (props) => {
  return (
    <BaseTable>
      <BaseTableHead>
        <BaseTableIcon />
        <BaseColumnHead title="NoteCategory" />
        <BaseColumnHead title="Active" />
        <BaseColumnHead title="Archived" />
      </BaseTableHead>
      <TableContent items={props.items} stats={true} />
    </BaseTable>
  );
};

export default StatsTable;
