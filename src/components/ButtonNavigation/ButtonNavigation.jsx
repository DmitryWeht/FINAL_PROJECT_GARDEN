// import { Link, useLocation, useParams } from "react-router-dom";
// import {
//   useGetCategoryByIdQuery,
//   useGetProductByIdQuery,
// } from "../../store/apiSlice";
// import classes from "./ButtonNavigation.module.css";

// const ButtonNavigation = () => {
//   const location = useLocation();

//   const { id } = useParams();

//   console.log("Category id:", id);
//   const {
//     data: categoryData,
//     isLoading: categoryLoading,
//     isError: categoryError,
//   } = useGetCategoryByIdQuery(id);
//   const {
//     data: productData,
//     isLoading: productLoading,
//     isError: productError,
//   } = useGetProductByIdQuery(id);

//   if (categoryLoading || productLoading) return <div>Loading...</div>;
//   if (categoryError || productError)
//     return (
//       <div>
//         Error: {categoryError ? categoryError.message : productError.message}
//       </div>
//     );

//   const category = categoryData && categoryData.category;
//   const categoryTitle = category && category.title;
//   const productTitle = productData && productData[0].title;

//   const isProductPage = location.pathname.startsWith("/products/");

//   return (
//     <>
//       <hr />
//       <div className={classes.category_title}>
//         <div className={classes.navigation_container}>
//           <Link to="/">
//             <button>Main page</button>
//           </Link>
//           <div className={classes.line}></div>
//           <Link to={`/categories/`}>
//             <button>Categories</button>
//           </Link>
//           <div className={classes.line}></div>

//           <div>
//             <button> {categoryTitle}</button>
//           </div>
//           {isProductPage && (
//             <>
//               <div className={classes.line}></div>
//               <div>
//                 <button> {productTitle}</button>
//               </div>
//             </>
//           )}
//         </div>
//         <p className={classes.title}>{categoryTitle}</p>
//       </div>
//     </>
//   );
// };

// export default ButtonNavigation;

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  useGetCategoryByIdQuery,
  useGetProductByIdQuery,
} from "../../store/apiSlice";
import classes from "./ButtonNavigation.module.css";

const ButtonNavigation = () => {
  const { id } = useParams();

  const location = useLocation();

  console.log("Category id:", id);
  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategoryByIdQuery(id);
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
  } = useGetProductByIdQuery(id);

  if (categoryLoading || productLoading) return <div>Loading...</div>;
  if (categoryError || productError)
    return (
      <div>
        Error: {categoryError ? categoryError.message : productError.message}
      </div>
    );

  const category = categoryData && categoryData.category;
  const categoryTitle = category && category.title;

  const productTitle = productData && productData[0].title;

  let buttonText = "";
  let linkTo = "";

  if (location.pathname.startsWith("/products/")) {
    buttonText = "All products";
    linkTo = "/products";
  } else if (location.pathname.startsWith("/categories/")) {
    buttonText = "Categories";
    linkTo = "/categories";
  } else if (location.pathname.startsWith("/sales/")) {
    buttonText = "All sales";
    linkTo = "/sales";
  }

  return (
    <>
      <hr />
      <div className={classes.category_title}>
        <div className={classes.navigation_container}>
          <Link to="/">
            <button>Main page</button>
          </Link>
          <div className={classes.line}></div>
          <Link to={linkTo}>
            <button>{buttonText}</button>
          </Link>
          <div className={classes.line}></div>

          <div>
            <button>{categoryTitle}</button>
          </div>
          <div className={classes.line}></div>

          <div>
            <button>{productTitle}</button>
          </div>
        </div>
        <p className={classes.title}>{categoryTitle}</p>
      </div>
    </>
  );
};
export default ButtonNavigation;
