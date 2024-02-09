import React from "react";
import classes from "./CategoryItem.module.css";

export const CategoryItem = ({ title, image }) => {
  const imageUrl = `${baseUrl}${image}`;
  return (
    <div className={classes.card}>
      <h2>
        <Liliia></Liliia>
      </h2>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
