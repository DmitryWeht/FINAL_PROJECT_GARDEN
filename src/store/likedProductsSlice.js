import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedProducts: [],
  likedIcons: [],
  likeTotalQuantity: null,
};

const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  reducers: {
    addToLikedProducts(state, action) {
      const existingIndex = state.likedProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.likedProducts[existingIndex].likeQuantity += 1;
        state.likeTotalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, likeQuantity: 1 };
        state.likedProducts.push(tempProduct);
        state.likeTotalQuantity += 1;
      }
    },
    deleteFromLikedProducts(state, action) {
      const productIdToRemove = action.payload;
      state.likedProducts = state.likedProducts.filter(
        (item) => item.id !== productIdToRemove
      );
      state.likeTotalQuantity--;
    },
    getQuantity(state) {
      const { likedProducts } = state;
      const uniqueIds = [];
      likedProducts.forEach((item) => {
        if (!uniqueIds.includes(item.id)) {
          uniqueIds.push(item.id);
        }
      });

      const quantity = uniqueIds.length;
      state.likeTotalQuantity = quantity;
    },
  },
});

export const { addToLikedProducts, deleteFromLikedProducts, getQuantity } =
  likedProductsSlice.actions;
export default likedProductsSlice.reducer;
