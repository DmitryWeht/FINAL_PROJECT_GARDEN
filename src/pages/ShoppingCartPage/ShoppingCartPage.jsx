import CartForm from "../../components/CartForm/CartForm";
import { CartList } from "../../components/CartList/CartList";
import TitleBar from "../../components/TitleBar/TitleBar";
import classes from "./ShoppingCartPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../store/cartSlice";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";


const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartNotEmpty = cartItems.length > 0

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
  }, [dispatch]);

  return (
    <div className="container">

      <TitleBar
          title="Shopping cart"
          buttonText="Back to the store"
          linkTo="/products"
        />
        <div className={`container ${isCartNotEmpty ? classes.shopping_basket 
          : classes.empty_basket}`}>
  
          {isCartNotEmpty ? (
            <CartList />
          ) : (
            <p>Looks like you have no items in your basket currently.</p>
          )}
          <button className={classes.shopping_button}>
          <NavLink to="/categories">Continue Shopping</NavLink></button> 
         
        </div>

          {isCartNotEmpty && <CartForm />}
      
        </div>

    
  );
};

export default ShoppingCartPage;
