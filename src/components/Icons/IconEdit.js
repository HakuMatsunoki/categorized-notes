import BaseIcon from "../UI/BaseIcon";
import { ReactComponent as ReactSprite } from "../../SVG/icons.svg";

const IconEdit = (props) => {
  const actionHandler = () => {
    props.onEdit();
  };

  return (
    <BaseIcon action={actionHandler}>
      <ReactSprite />
      <use xlinkHref="#icon-pencil"></use>
    </BaseIcon>
  );
};

export default IconEdit;
