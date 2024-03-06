import { useSelector } from "react-redux";
import classes from "./CategoryItem.module.css";

export const CategoryItem = ({ title, image }) => {
  const imageUrl = `http://127.0.0.1:3333/${image}`;
  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "dark" ? classes.dark : "";
  return (
    <div className={`${classes.card} ${themeClass}`}>
      <div className={classes.img_wrapper}>
        <img src={imageUrl} alt={title} />
      </div>
      <p>{title}</p>
    </div>
  );
};
