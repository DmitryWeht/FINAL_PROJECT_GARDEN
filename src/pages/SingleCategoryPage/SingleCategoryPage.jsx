import React from "react";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import ProductsFromCategory from "../../components/ProductsFromCategory/ProductsFromCategory";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";

const SingleCategoryPage = () => {
  const { isLoading } = useGetCategoryByIdQuery(); // Получение isLoading из хука запроса
  return (
    <div className="container">
      <ButtonNavigation />
      <ProductsFromCategory isLoading={isLoading} />{" "}
      {/* Передача isLoading как пропс в компонент ProductsFromCategory */}
    </div>
  );
};

export default SingleCategoryPage;
