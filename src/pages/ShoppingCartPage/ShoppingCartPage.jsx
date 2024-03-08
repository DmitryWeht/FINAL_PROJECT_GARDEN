import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartForm from "../../components/CartForm/CartForm";
import { CartList } from "../../components/CartList/CartList";
import SubmitModal from "../../components/SubmitModal/SubmitModal";
import TitleBar from "../../components/TitleBar/TitleBar";
import { getTotals } from "../../store/cartSlice";
import classes from "./ShoppingCartPage.module.css";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartNotEmpty = cartItems.length > 0;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(getTotals());
      } catch (error) {
        console.error("Ошибка при загрузке данных о корзине:", error);
      }
    };
    fetchData();
  }, [dispatch, cartItems]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="container">
      <TitleBar
        title="Shopping cart"
        buttonText="Back to the store"
        linkTo="/"
      />
      <div
        className={`${
          isCartNotEmpty ? classes.shopping_basket : classes.empty_basket
        }`}
      >
        {isCartNotEmpty ? (
          <CartList />
        ) : (
          <>
            <p>Looks like you have no items in your basket currently.</p>
            <button className={classes.shopping_button}>
              <NavLink to="/categories">Continue Shopping</NavLink>
            </button>
          </>
        )}

        <SubmitModal open={openModal} handleCloseModal={handleCloseModal} />

        {isCartNotEmpty && <CartForm handleOpenModal={handleOpenModal} />}
      </div>
    </div>
  );
};
export default ShoppingCartPage;
