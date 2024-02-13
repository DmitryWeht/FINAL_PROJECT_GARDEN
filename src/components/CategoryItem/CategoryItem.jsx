import classes from "./CategoryItem.module.css";

export const CategoryItem = ({ title, image }) => {
  const imageUrl = `http://127.0.0.1:3333/${image}`;
  return (
    <div className={classes.card}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};
