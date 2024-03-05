// import { Link, useParams } from "react-router-dom";
// import { useGetCategoryByIdQuery } from "../../store/apiSlice";
// import ProductItem from "../ProductItem/ProductItem";
// import classes from "./ProductsFromCategory.module.css";

// const ProductsFromCategory = () => {
//   const { categoryId } = useParams();
//   const categories = useGetCategoryByIdQuery(categoryId);
//   const categoryTitle =
//     categories.data && categories.data.category
//       ? categories.data.category.title
//       : "";

//   console.log(categoryTitle);

//   if (!categories || !categories.data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="conteiner">
//       <p className={classes.title}>{categoryTitle}</p>
//       <div className={classes.products_wrapper}>
//         {categories.data.data &&
//           categories.data.data.map((product) => (
//             <div key={product.id}>
//               <Link to={`/categories/${categoryId}/${product.id}`}>
//                 <ProductItem {...product} />
//               </Link>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsFromCategory;
import React from "react";
import { Link, useParams } from "react-router-dom";
import useSkeleton from "../../hooks/useSkeleton";
import { useGetCategoryByIdQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import SkeletonForProductItem from "../SkeletonForProductItem/SkeletonForProductItem";
import classes from "./ProductsFromCategory.module.css";

const ProductsFromCategory = () => {
  const { categoryId } = useParams();
  const categoryData = useGetCategoryByIdQuery(categoryId);
  const categoryTitle =
    categoryData.data && categoryData.data.category
      ? categoryData.data.category.title
      : "";

  const showSkeleton = useSkeleton(2000);
  return (
    <div className="container">
      <p className={classes.title}>{categoryTitle}</p>
      <div className={classes.products_wrapper}>
        {categoryData.isLoading || showSkeleton
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonForProductItem />
            ))
          : categoryData.data.data.map((product) => (
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
