import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useGetCategoryByIdQuery,
  useGetProductByIdQuery,
} from "../../store/apiSlice";
import classes from "./ButtonNavigation.module.css";
import { ThemeContext } from "@emotion/react";

const ButtonNavigation = ({ showOnlyFirstTwoButtons }) => {
  const location = useLocation();
  let buttonText = "";
  let linkTo = "";
  // Логика для определения текста и URL кнопки в зависимости от текущего пути
  if (location.pathname.startsWith("/products")) {
    buttonText = "All products";
    linkTo = "/products";
  } else if (location.pathname.startsWith("/categories")) {
    buttonText = "Categories";
    linkTo = "/categories";
  } else if (location.pathname.startsWith("/sales")) {
    buttonText = "All sales";
    linkTo = "/sales";
  } else if (location.pathname.startsWith("/liked")) {
    buttonText = "Liked products";
    linkTo = "/liked";
  }

  const id = useParams().id;
  const categoryId = useParams().categoryId;

  const { data: categoryData } = useGetCategoryByIdQuery(categoryId);
  const { data: productData } = useGetProductByIdQuery(id);

  const categoryTitle =
    categoryData && categoryData.category ? categoryData.category.title : "";
  const productTitle =
    productData && productData.length > 0 ? productData[0].title : "";
  // Установка стилей для отображения кнопок в зависимости от наличия данных
  const categoryButtonStyle = categoryTitle
    ? { display: "block" }
    : { display: "none" };
  const productButtonStyle = productTitle
    ? { display: "block" }
    : { display: "none" };

  const theme = useSelector((state) => state.theme.theme);
  const themeClass = theme === "dark" ? classes.dark : "";

  return (
    <>
      <div className={`${classes.navigation_container} ${themeClass}`}>
        {!showOnlyFirstTwoButtons && (
          <>
            <Link to="/">
              <button>Main page</button>
            </Link>
            <div className={classes.line}></div>
            <Link to={linkTo}>
              <button
                id={categoryTitle || productTitle ? "" : classes.last_button}
              >
                {buttonText}
              </button>
            </Link>
          </>
        )}
        <div className={classes.line} style={categoryButtonStyle}></div>

        <Link to={`/categories/${categoryId}`}>
          <button
            style={categoryButtonStyle}
            id={productTitle ? "" : classes.last_button}
          >
            {categoryTitle}
          </button>
        </Link>
        <div style={productButtonStyle} className={classes.line}></div>
        <div>
          <button id={classes.last_button} style={productButtonStyle}>
            {productTitle}
          </button>
        </div>
      </div>
    </>
  );
};
export default ButtonNavigation;
