import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import { resetFilters } from "../../store/filterSlice";

import ProductsList from "../../components/ProductsList/ProductsList";
import classes from "./SalePage.module.css";

const SalePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <div className="container">
      <ButtonNavigation showOnlyFirstTwoButtons={false} />
      <h1 className={classes.title}>Discounted items</h1>
      <Filter content="sale" />
      <ProductsList content="sale" />
    </div>
  );
};

export default SalePage;
