import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedProducts: [],
  likeTotalQuantity: null,
};


const likedProductsSlice = createSlice({
  name: "likedProducts",
  initialState,
  reducers: {
    addToLikedProducts(state, action) {
      // Находим индекс товара в списке избранных
      const existingIndex = state.likedProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      // Если товар еще не находится в списке избранных
      if (existingIndex === -1) {
        // то добавляем товар в список избранных
        state.likedProducts.push(action.payload);
        // Увеличиваем общее количество лайков на 1
        state.likeTotalQuantity += 1;
      }
    },
    deleteFromLikedProducts(state, action) {
      // Получаем id товара, который нужно удалить
      const productIdToRemove = action.payload;
      // Фильтруем и оставляем только те, у которых id не совпадает с id товара для удаления
      state.likedProducts = state.likedProducts.filter(
        (item) => item.id !== productIdToRemove
      );
      state.likeTotalQuantity--;
    },
  },
});

export const { addToLikedProducts, deleteFromLikedProducts } =
  likedProductsSlice.actions;

export default likedProductsSlice.reducer;