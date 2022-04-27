import TableRow from "./TableRow";

const TableContent = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <TableRow
          item={item}
          archived={props.archived}
          stats={props.stats}
          key={item._id}
          onEdit={props.onEdit}
        />
      ))}
    </div>
  );
};

export default TableContent;
