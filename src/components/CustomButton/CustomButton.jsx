import React, { useEffect, useState } from "react";
import classes from "./CustomButton.module.css";

const CustomButton = ({
  added,
  onClick,
  isHovered,
  buttonClasses,
  addedToCart,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(added);
  }, [added]);

  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  useEffect(() => {
    if (addedToCart) {
      setIsAdded(true);
    }
  }, [addedToCart]);

  return (
      <button
        className={`${classes.custom_button} ${
        isAdded ? classes.added : ""
      } ${buttonClasses}`}
      onClick={handleClick}
    >
      {isAdded && !isHovered ? "Added" : "Add to cart"}
    </button>
  );
};

export default CustomButton;
