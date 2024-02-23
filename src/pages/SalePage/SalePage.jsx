import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import { resetFilters } from "../../store/filterSlice";

import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./SalePage.module.css";
import { useGetAllProductsQuery } from "../../store/apiSlice";
import { useFiltration } from '../../hooks/useFiltration';

const SalePage = () => {
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
      <h1 className={classes.title}>Discounted items</h1>
      <Filter content="sale" />
      <ProductsList content="sale" products={filteredProducts}/>
    </div>
  );
};

export default SalePage;
