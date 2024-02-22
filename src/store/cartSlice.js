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
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        state.cartTotalQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
      });
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
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
    },
    getTotals(state) {
      const { cartItems } = state;
      const uniqueIds = [];
      cartItems.forEach((item) => {
        if (!uniqueIds.includes(item.id)) {
          uniqueIds.push(item.id);
        }
      });

      const quantity = uniqueIds.length;
      const total = cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;
        return cartTotal + itemTotal;
      }, 0);
      state.cartTotalQuantity = quantity;
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
