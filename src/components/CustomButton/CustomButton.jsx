import React, { useEffect, useState } from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({ added, onClick, buttonClasses }) => {
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    setIsAdded(added);
  }, [added]);

  const handleMouseEnter = () => {
    if (isAdded) {
      setIsAdded(false);
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    setIsAdded(true);
    onClick();
  };
  return (
      <button
        className={`${classes.custom_button} ${
        isAdded ? classes.added : ""
      } ${buttonClasses}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
      {isAdded ? "Added" : "Add to cart"}
      </button>
  );
};

export default CustomButton;
