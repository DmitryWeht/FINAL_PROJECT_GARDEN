import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import ProductsFromCategory from "../../components/ProductsFromCategory/ProductsFromCategory";

const SingleCategoryPage = () => {
  return (
    <div className="container">
      <ButtonNavigation />
      <ProductsFromCategory />
    </div>
  );
};

export default SingleCategoryPage;
