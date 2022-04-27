import BaseIcon from "../UI/BaseIcon";
import { ReactComponent as ReactSprite } from "../../SVG/icons.svg";

const IconArchive = (props) => {
  const actionHandler = () => {
    props.onArch();
  };

  return (
    <BaseIcon action={actionHandler}>
      <ReactSprite />
      <use xlinkHref="#icon-folder-download"></use>
    </BaseIcon>
  );
};

export default IconArchive;
