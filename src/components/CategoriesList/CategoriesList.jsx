import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../store/apiSlice";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import SkeletonForCategoryItem from "../SkeletonForCategoryItem/SkeletonForCategoryItem";
import classes from "./CategoriesList.module.css";

export const CategoriesList = ({ listLength = 4, isLoading }) => {
  const { data } = useGetAllCategoriesQuery();

  if (isLoading) {
    return (
      <div className={classes.loading}>
        {/* Создается массив длиной listLength, без определенных значений,затем для каждого элемента массива создается компонент скелетона*/}
        {[...Array(listLength)].map((_, index) => (
          <SkeletonForCategoryItem key={index} />
        ))}
      </div>
    );
  }

  const targetCategories = data?.slice(0, listLength);

  return (
    <div>
      <div className={classes.categories_block}>
        {targetCategories?.map((category, index) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className={classes.card_category}
          >
            <CategoryItem {...category} />
          </Link>
        ))}
      </div>
    </div>
  );
};
