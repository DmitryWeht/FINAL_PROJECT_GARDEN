import React from "react";
import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import classes from "./CategoriesList.module.css";

export const CategoriesList = ({ listLength = 4 }) => {
  const { data } = useGetAllCategoriesQuery();
  console.log(data);
  const targetCategories = data?.slice(0, listLength);

  return (
    <div>
      <div className={classes.categories_block}>
        {targetCategories?.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className={classes.link}
          >
            <CategoryItem {...category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
