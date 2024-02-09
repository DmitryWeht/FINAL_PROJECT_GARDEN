import React from "react";
import { useSelector } from "react-redux";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import classes from "./CategoriesList.module.css";

export const CategoriesList = ({ listLength = 4 }) => {
  //   const dispath = useDispatch();
  const categories = useSelector((store) => store.categories);

  const { data } = useGetAllCategoriesQuery();

  console.log(data);

  const targetCategories = data?.slice(0, listLength);

  return (
    <div>
      <div className={classes.categories_block}>
        {targetCategories?.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </div>
  );
};
