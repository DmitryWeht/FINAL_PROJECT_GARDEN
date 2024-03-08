import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: null,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      // Если товар еще не добавлен в корзину
      if (existingProductIndex === -1) {
        // Добавляем новый товар в корзину с начальным количеством 1
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
        // Увеличиваем общее количество товаров в корзине
        state.cartTotalQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      // Если товар найден в корзине
      if (itemIndex !== -1) {
        state.cartItems.splice(itemIndex, 1); // Удаляем товар из корзины
        state.cartTotalQuantity -= 1;
      }
    },

    increaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      // Если товар найден в корзине
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cartQuantity += 1; // Увеличиваем количество выбранного товара
        state.cartTotalQuantity += 1;
      }
    },

    decreaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      // Если количество выбранного товара больше нуля
      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity -= 1; // Уменьшаем количество выбранного товара
        state.cartTotalQuantity -= 1;
      }
    },

    clearCart(state) {
      state.cartItems = [];
    },
    // Получение общей стоимости и количества товаров в корзине
    getTotals(state) {
      const total = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, discont_price, cartQuantity } = cartItem;
        // Вычисление общей стоимости товара
        const itemTotal = discont_price
          ? discont_price * cartQuantity // Если у товара есть скидка, учитываем ее
          : price * cartQuantity;
        // Возврат обновленного значения общей стоимости
        return cartTotal + itemTotal;
      }, 0);
      // Вычисление общего количества товаров в корзине
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity, // Суммирование количества каждого товара
        0
      );
      // Округление общей стоимости до двух знаков после запятой и преобразование в число
      state.cartTotalAmount = Number(total.toFixed(2));
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
