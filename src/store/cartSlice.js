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
    // addToCart(state, action) {
    //   const existingIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id
    //   );

    //   if (existingIndex >= 0) {
    //     state.cartItems[existingIndex].cartQuantity += 1;
    //     state.cartTotalQuantity += 1;
    //   } else {
    //     const tempProduct = { ...action.payload, cartQuantity: 1 };
    //     state.cartItems.push(tempProduct);
    //     state.cartTotalQuantity += 1;
    //   }
    // },
    addToCart(state, action) {
      const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      // Проверяем, существует ли товар в корзине
      if (existingProductIndex === -1) {
        // Если товара нет в корзине, добавляем его с начальным количеством 1
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
        state.cartTotalQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartTotalQuantity -= 1;
    },
    increaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1;
      }
    },

    decreaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity -= 1;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },

    getTotals(state) {
      const total = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, discont_price, cartQuantity } = cartItem;
        const itemTotal = discont_price
          ? discont_price * cartQuantity
          : price * cartQuantity;
        return cartTotal + itemTotal;
      }, 0);
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );
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
