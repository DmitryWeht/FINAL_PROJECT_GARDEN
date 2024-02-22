import ButtonNavigation from "../../components/ButtonNavigation/ButtonNavigation";
import { Filter } from "../../components/Filter/Filter";
import classes from "./LikedProductsPage.module.css";

const LikedProductPage = () => {
  return (
    <div className="container">
      <ButtonNavigation />
      <h1 className={classes.title}>Liked products</h1>
      <Filter content="sale" />
    </div>
  );
};

export default LikedProductPage;
