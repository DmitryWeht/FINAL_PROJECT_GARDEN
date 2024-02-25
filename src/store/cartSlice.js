import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity")
    ? parseInt(localStorage.getItem("cartTotalQuantity"))
    : null,
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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.cartTotalQuantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
    },
    increaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
    },
    // decreaseCart(state, action) {
    //   const { id } = action.payload;
    //   const itemIndex = state.cartItems.findIndex((item) => item.id === id);
    //   if (state.cartItems[itemIndex].cartQuantity > 1) {
    //     state.cartItems[itemIndex].cartQuantity -= 1;
    //   } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.id
    //     );

    //     state.cartItems = nextCartItems;
    //   }
    // },
    decreaseCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (state.cartItems[itemIndex].cartQuantity > 0) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotalQuantity", state.cartTotalQuantity);
    },
    // getTotals(state) {
    //   const { cartItems } = state;

    //   const uniqueItems = {};
    //   cartItems.forEach((item) => {
    //     if (uniqueItems[item.id]) {
    //       uniqueItems[item.id].cartQuantity += item.cartQuantity;
    //     } else {
    //       uniqueItems[item.id] = { ...item };
    //     }
    //   });
    //   const total = Object.values(uniqueItems).reduce((cartTotal, cartItem) => {
    //     const { price, discont_price, cartQuantity } = cartItem;
    //     const itemTotal = discont_price
    //       ? discont_price * cartQuantity
    //       : price * cartQuantity;
    //     return cartTotal + itemTotal;
    //   }, 0);
    //   const quantity = Object.values(uniqueItems).length;

    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = Number(total.toFixed(2));
    // },
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
