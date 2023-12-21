import classes from "./Button.module.css";
const Button = ({ children, className, isSelected, ...props }) => {
  return (
    <button
      className={`${classes.button} ${className} ${
        isSelected ? classes.isSelected : ""
      }
    `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
