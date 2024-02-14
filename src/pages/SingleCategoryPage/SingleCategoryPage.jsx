import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import ProductsFromCategory from "../../components/ProductsFromCategory/ProductsFromCategory";

const SingleCategoryPage = () => {
  return (
    <div className="container">
      <CategoryNavigation />
      <ProductsFromCategory />
    </div>
  );
};

export default SingleCategoryPage;
