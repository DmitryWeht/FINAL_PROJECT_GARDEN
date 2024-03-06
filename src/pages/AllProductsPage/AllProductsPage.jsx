import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import CustomPagination from "../../components/Pagination/Pagination";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useFiltration } from "../../hooks/useFiltration";
import { usePagination } from "../../hooks/usePagination";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import { resetFilters } from "../../store/filterSlice";
import classes from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const { minPrice, maxPrice, showDiscounted, sort } = useSelector(
    (state) => state.filter
  );

  const filteredProducts = useFiltration(
    minPrice,
    maxPrice,
    showDiscounted,
    sort,
    products,
    isLoading,
    isError
  );

  const { totalPages, currentProducts, setCurrentPage } = usePagination(
    filteredProducts,
    8
  );
  const handlechange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <h1 className={classes.title}>All products</h1>
      <Filter />
      <ProductsList products={currentProducts} />
      <div className={classes.pagination}>
        <CustomPagination count={totalPages} handlechange={handlechange} />
      </div>
    </div>
  );
};

export default AllProductsPage;
