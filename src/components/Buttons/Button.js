import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.btn}>
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );
};

export default Button;
