import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import CustomPagination from "../../components/Pagination/Pagination";
import ProductItem from "../../components/ProductItem/ProductItem";
import SkeletonForProductItem from "../../components/SkeletonForProductItem/SkeletonForProductItem";
import { useFiltration } from "../../hooks/useFiltration";
import { usePagination } from "../../hooks/usePagination";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import classes from "./LikedProductPage.module.css";

const LikedProductPage = () => {
  const likedProducts = useSelector(
    (state) => state.likedProducts.likedProducts
  );
  const { data: allProducts, isLoading } = useGetAllProductsQuery();
  const { minPrice, maxPrice, sort } = useSelector((state) => state.filter);

  const filteredProducts = useFiltration(
    minPrice,
    maxPrice,
    false,
    sort,
    likedProducts,
    false,
    false
  );

  const { totalPages, currentProducts, setCurrentPage } = usePagination(
    filteredProducts,
    8
  );
  const handlechange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавность прокрутки
    });
  };

  const skeletonCount = likedProducts.length;

  return (
    <div className="container">
      <ButtonNavigation />
      <h1 className={classes.title}>Liked products</h1>
      <Filter content="sale" />
      <div className={classes.products_list}>
        {/* Показываем скелетон только при загрузке данных */}
        {isLoading &&
          Array.from({ length: skeletonCount }).map((_, index) => (
            <SkeletonForProductItem key={index} />
          ))}
        {/* Показываем реальные продукты, когда данные загружены */}
        {!isLoading &&
          currentProducts.map((product) => (
            <Link
              to={`/liked/${product.id}`}
              className={classes.card_product}
              key={product.id}
            >
              <ProductItem {...product} />
            </Link>
          ))}
      </div>
      <div className={classes.pagination}>
        <CustomPagination count={totalPages} handlechange={handlechange} />
      </div>
    </div>
  );
};

export default LikedProductPage;
