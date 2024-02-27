import { useDispatch, useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import ProductItem from "../../components/ProductItem/ProductItem";
import classes from "./LikedProductsPage.module.css";
import { useEffect } from "react";
import { updateFilters } from "../../store/likedProductsSlice";
import { useFiltration } from "../../hooks/useFiltration";

const LikedProductPage = () => {
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.likedProducts.likedProducts);
  const { filters } = useSelector((state) => state.likedProducts.filters);
  const { minPrice, maxPrice, sort } = useSelector((state) => state.filter);

  const filteredProducts = useFiltration(minPrice, maxPrice, false, sort, likedProducts, false, false);

  useEffect(() => {
    dispatch(updateFilters(filteredProducts));
  }, [dispatch, likedProducts, filters, filteredProducts]);

  return (
    <div className="container">
      <ButtonNavigation />
      <h1 className={classes.title}>Liked products</h1>
      <Filter content="sale" />
      <div className={classes.products_list}>
        {filteredProducts.map((product) => (
          <div className={classes.card_product} key={product.id}>
            <ProductItem {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedProductPage;