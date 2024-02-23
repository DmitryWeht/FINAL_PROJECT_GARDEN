import CartForm from "../../components/CartForm/CartForm";
import { CartList } from "../../components/CartList/CartList";
import TitleBar from "../../components/TitleBar/TitleBar";
import classes from "./ShoppingCartPage.module.css";

const ShoppingCartPage = () => {
  return (
    <div className="container">

      <TitleBar
          title="Shopping cart"
          buttonText="Back to the store"
          linkTo="/products"
        />
        <div className={classes.shopping_basket}>
          <div>
             <CartList />
          </div>
          <CartForm />
        </div>

    </div>
  );
};

export default ShoppingCartPage;
