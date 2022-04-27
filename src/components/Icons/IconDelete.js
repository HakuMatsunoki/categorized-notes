import BaseIcon from "../UI/BaseIcon";
import { ReactComponent as ReactSprite } from "../../SVG/icons.svg";

const IconDelete = (props) => {
  const actionHandler = () => {
    props.onDel();
  };

  return (
    <BaseIcon action={actionHandler}>
      <ReactSprite />
      <use xlinkHref="#icon-bin"></use>
    </BaseIcon>
  );
};

export default IconDelete;
