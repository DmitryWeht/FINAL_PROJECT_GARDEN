import React from "react";

import classes from "./CustomButton.module.css";
const CustomButton = ({ onClick, buttonClasses, buttonText }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div>
      <button
        className={`${classes.custom_button} 
         ${buttonClasses}`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;
