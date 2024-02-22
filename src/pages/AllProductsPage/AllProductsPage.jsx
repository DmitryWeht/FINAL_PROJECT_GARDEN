import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import { resetFilters } from "../../store/filterSlice";
import classes from "./AllProductsPage.module.css";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import { useFiltration } from '../../hooks/useFiltration';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { data: fetchedProducts, isLoading, isError } = useGetAllProductsQuery();
  const { minPrice, maxPrice, showDiscounted, sort } = useSelector((state) => state.filter);

  const filteredProducts = useFiltration(minPrice, maxPrice, showDiscounted, sort, fetchedProducts, isLoading, isError);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <p className={classes.title}>All products</p>
      <Filter />
      <ProductsList  products={filteredProducts}/>
    </div>
  );
};

export default AllProductsPage;
