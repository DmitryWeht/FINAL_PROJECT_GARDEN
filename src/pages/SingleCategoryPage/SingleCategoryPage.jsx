// import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import ProductsFromCategory from "../../components/ProductsFromCategory/ProductsFromCategory";

const SingleCategoryPage = () => {
  return (
    <div className="container">
      {/* <CategoryNavigation /> */}
      <ButtonNavigation />
      <ProductsFromCategory />
    </div>
  );
};

export default SingleCategoryPage;
