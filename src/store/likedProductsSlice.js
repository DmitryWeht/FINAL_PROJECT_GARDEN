import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedProducts: [],
  likeTotalQuantity: null,
  filters: {
    minPrice: null,
    maxPrice: null,
    sort: '',
  },
};

const applyFiltersAndSort = (products, filters) => {
  const { minPrice, maxPrice, sort } = filters || {};

  if (minPrice !== null && minPrice !== undefined) {
    products = products.filter((product) => product.price >= minPrice);
  }
  if (maxPrice !== null && maxPrice !== undefined) {
    products = products.filter((product) => product.price <= maxPrice);
  }
  
  if (sort === 'asc') {
    products = products.sort((a, b) => a.price - b.price);
  } else if (sort === 'desc') {
    products = products.sort((a, b) => b.price - a.price);
  }

  return products;
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

    updateFilters(state, action) {
      const newFilters = { ...state.filters, ...action.payload };
      const updatedLikedProducts = applyFiltersAndSort(state.likedProducts, newFilters);
      return {
        ...state,
        filters: newFilters,
        likedProducts: updatedLikedProducts,
      };
    },
  },
});

export const { addToLikedProducts, deleteFromLikedProducts, getQuantity, updateFilters } =
  likedProductsSlice.actions;
export { applyFiltersAndSort };
export default likedProductsSlice.reducer;