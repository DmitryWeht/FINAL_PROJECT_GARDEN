import { useEffect, useState } from 'react';

export const useFiltration = (minPrice, maxPrice, showDiscounted, sort, data) => {
  const [products, setProducts] = useState(data);
//   const [filteredProducts, setFilteredProducts] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const filterProducts = () => {
      if (!isLoading && !isError) {
        const filteredAndSortedProducts = data
          .filter((product) => {
            const isInPriceRange =
              (!minPrice || product.price >= Number(minPrice)) &&
              (!maxPrice || product.price <= Number(maxPrice));
            const isDiscounted = showDiscounted ? product.discont_price : true;
            return isInPriceRange && isDiscounted;
          })
          .sort((a, b) => {
            if (sort === 'asc') {
              return a.price - b.price;
            } else if (sort === 'desc') {
              return b.price - a.price;
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

  return products
};