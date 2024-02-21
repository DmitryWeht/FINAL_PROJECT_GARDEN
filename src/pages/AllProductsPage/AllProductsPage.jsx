import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import ProductsList from "../../components/ProductsList/ProductsList";
import { resetFilters } from "../../store/filterSlice";
import classes from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <p className={classes.title}>All products</p>
      <Filter />
      <ProductsList />
    </div>
  );
};

export default AllProductsPage;
