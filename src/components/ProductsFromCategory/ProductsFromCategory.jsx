import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsFromCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { useFiltration } from "../../hooks/useFiltration";
import { useEffect } from "react";
import { resetFilters } from "../../store/filterSlice";

const ProductsFromCategory = ({ isLoading }) => {
  const dispatch = useDispatch();
  // Получение параметра categoryId из URL
  const { categoryId } = useParams();
  // Получение данных о категории по ее идентификатору с помощью хука useGetCategoryByIdQuery
  const { data: categoryData } = useGetCategoryByIdQuery(categoryId);
  // для извлечения значений из Redux store с использованием селектора.
  const { minPrice, maxPrice, showDiscounted, sort } = useSelector(
    (state) => state.filter
  );
  // Получение названия категории
  const categoryTitle =
    categoryData && categoryData.category ? categoryData.category.title : "";
  //использует хук useFiltration, передавая ему параметры для фильтрации и сортировки продуктов.
    const filteredProducts = useFiltration( 
      minPrice,
      maxPrice,
      showDiscounted,
      sort,
      categoryData?.data || [],//если data существует, то возвращается его значение; в противном случае - пустой массив ([]).
      isLoading,
);

    useEffect(() => {
      // Сброс фильтров при монтировании компонента
      dispatch(resetFilters());
    }, [dispatch]);

  return (
    <div>
      <p className={classes.title}>{categoryTitle}</p>
      <Filter />
      <div className={classes.products_wrapper}>
        {/* Если данные загружаются, отображаем скелетон */}
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForProductItem key={index} />
            ))
          : // Если данные загружены и categoryData существует, отображаем каждый продукт
            categoryData &&
            categoryData.data &&
            filteredProducts.map((product) => (
              <div key={product.id}>
                <Link to={`/categories/${categoryId}/${product.id}`}>
                  <ProductItem {...product} />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductsFromCategory;
