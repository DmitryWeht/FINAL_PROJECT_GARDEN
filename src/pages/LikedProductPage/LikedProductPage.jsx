import { useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import ProductItem from "../../components/ProductItem/ProductItem";
import classes from "./LikedProductsPage.module.css";

const LikedProductPage = () => {
  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );

  return (
    <div className="container">
      <ButtonNavigation />
      <h1 className={classes.title}>Liked products</h1>
      <Filter content="sale" />
      <div className={classes.products_list}>
        {likedProducts.map((product) => (
          <ProductItem key={product.id} {...product} className={classes.link} />
        ))}
      </div>
    </div>
  );
};

export default LikedProductPage;
