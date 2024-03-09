import { useEffect, useState } from "react";

export const useFiltration = (minPrice, maxPrice, showDiscounted, sort, data, isLoading, isError) => {
 //  // Локальное состояние для хранения отфильтрованных и отсортированных продуктов
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const filterProducts = () => {
     //  Проверка на наличие данных и отсутствие ошибок и загрузки 
      if (data && !isLoading && !isError) {
        const filteredAndSortedProducts = data
          .filter((product) => {
            const productPrice =
              product.discont_price !== null
                ? product.discont_price
                : product.price;

            const isInPriceRange =
              (!minPrice || productPrice >= Number(minPrice)) &&
              (!maxPrice || productPrice <= Number(maxPrice));

            const isDiscounted = showDiscounted
              ? product.discont_price !== null
              : true;
            return isInPriceRange && isDiscounted;
          })

          .sort((a, b) => {
            const priceA = a.discont_price !== null ? a.discont_price : a.price;
            const priceB = b.discont_price !== null ? b.discont_price : b.price;

            if (sort === "asc") {
              return priceA - priceB;
            } else if (sort === "desc") {
              return priceB - priceA;
            } else {
              return 0;
            }
          });

        setProducts(filteredAndSortedProducts);
      }
    };
    const timeoutId = setTimeout(filterProducts, 200);
    return () => clearTimeout(timeoutId);
  }, [minPrice, maxPrice, showDiscounted, sort, data, isLoading, isError]);

  return products;
};
