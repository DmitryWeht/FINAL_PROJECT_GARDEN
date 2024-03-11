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
  //Получение данных о элементах корзины из Redux store с помощью селектора useSelector.
  const cartItems = useSelector((state) => state.cart.cartItems);
  // проверяет, есть ли элементы в корзине
  const isCartNotEmpty = cartItems.length > 0;
  // Создание состояния openModal, представляющего открыто ли модальное окно.
  const [openModal, setOpenModal] = useState(false);

  // выполняются побочные эффекты, попосле монтирования компонента (или при изменении 
  // cartItems), происходит вызов асинхронной функции fetchData, которая задерживает выполнение на 1 секунду (симуляция асинхронного запроса) 
  //и затем отправляет действие getTotals в Redux store с помощью dispatch.
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

  // функции для управления открытием и закрытием модального окна.
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