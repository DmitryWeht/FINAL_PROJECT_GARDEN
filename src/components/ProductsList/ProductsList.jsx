// import { Link } from "react-router-dom";
// import { useGetAllProductsQuery } from "../../store/apiSlice";
// import ProductItem from "../ProductItem/ProductItem";
// import classes from "./ProductsList.module.css";

// const ProductsList = ({ content }) => {
//   const { data: products, isLoading, isError } = useGetAllProductsQuery();
//   console.log(products);

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error...</div>;
//   if (!products || products.length === 0) {
//     return <div>No products available</div>;
//   }

//   const discountedProducts = products.filter(
//     (product) => product.discont_price
//   );

//   const limitedProducts = [];
//   while (limitedProducts.length < 4 && discountedProducts.length > 0) {
//     const randomIndex = Math.floor(Math.random() * discountedProducts.length);
//     limitedProducts.push(discountedProducts[randomIndex]);
//     discountedProducts.splice(randomIndex, 1);
//   }

//   return (
//     <div className={classes.products_list}>
//       {(content === "main"
//         ? limitedProducts
//         : content === "sale"
//         ? discountedProducts
//         : products || []
//       ).map((product) => (
//         <Link
//           key={product.id}
//           to={`/products/${product.id}`}
//           className={classes.link}
//         >
//           <ProductItem {...product} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductsList;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import ProductItem from "../ProductItem/ProductItem";
import classes from "./ProductsList.module.css";

const ProductsList = ({ content }) => {
  const {
    data: fetchedProducts,
    isLoading,
    isError,
  } = useGetAllProductsQuery();
  const [products, setProducts] = useState(fetchedProducts);

  const { minPrice, maxPrice, showDiscounted, sort } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      const filteredAndSortedProducts = fetchedProducts
        .filter((product) => {
          const isInPriceRange =
            (!minPrice || product.price >= Number(minPrice)) &&
            (!maxPrice || product.price <= Number(maxPrice));
          const isDiscounted = showDiscounted ? product.discont_price : true;
          return isInPriceRange && isDiscounted;
        })
        .sort((a, b) => {
          if (sort === "asc") {
            return a.price - b.price;
          } else if (sort === "desc") {
            return b.price - a.price;
          } else {
            return 0;
          }
        });

      setProducts(filteredAndSortedProducts);
    }
  }, [
    minPrice,
    maxPrice,
    showDiscounted,
    sort,
    fetchedProducts,
    isLoading,
    isError,
  ]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  const discountedProducts = products.filter(
    (product) => product.discont_price
  );

  const limitedProducts = [];
  while (limitedProducts.length < 4 && discountedProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * discountedProducts.length);
    limitedProducts.push(discountedProducts[randomIndex]);
    discountedProducts.splice(randomIndex, 1);
  }

  return (
    <div className={classes.products_list}>
      {(content === "main"
        ? limitedProducts
        : content === "sale"
        ? discountedProducts
        : products
      ).map((product) => (
        <Link
          key={product.id}
          to={
            content === "sale"
              ? `/sales/${product.id}`
              : `/products/${product.id}`
          }
          className={classes.link}
        >
          <ProductItem {...product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
