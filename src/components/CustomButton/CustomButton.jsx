import React from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ added, onClick, buttonClasses }) => {
  return (
    <button
      className={`${classes.custom_button} ${
        added ? classes.added : ""
      } ${buttonClasses}`}
      onClick={onClick}
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
};

export default CustomButton;
