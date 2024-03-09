import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CategoriesList } from "../CategoriesList/CategoriesList";
import TitleBar from "../TitleBar/TitleBar";
import classes from "./CategoriesSection.module.css";

export const CategoriesSection = ({ isLoading }) => {
  const theme = useSelector((state) => state.theme.theme);
  // Определение стилей для кнопки в зависимости от темы
  const buttonStyle = {
    color: theme === "dark" ? "white" : "#8b8b8b", // Белый текст для темной темы, иначе серый
    backgroundColor: theme === "dark" ? "#282828" : "transparent", // Темный фон для темной темы, иначе прозрачный
    border: theme === "dark" ? "1px solid #ffffff" : "1px solid #ddd", // Белая рамка для темной темы, иначе серая
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "126%",
    borderRadius: "6px",
    whiteSpace: "nowrap",
    marginBottom: "68px",
    transition:
      "background-color 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s",
  };

  return (
    <div>
      <div className="container">
        <TitleBar
          title="Categories"
          buttonText="All categories"
          linkTo="/categories"
        />
        <CategoriesList isLoading={isLoading} />
        <div className={classes.hidden_button}>
          <Link to="/categories">
            <button style={buttonStyle}>All categories</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
