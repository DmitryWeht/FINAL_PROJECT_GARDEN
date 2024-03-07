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
// Функция применения фильтров и сортировки к продуктам
const applyFiltersAndSort = (products, filters) => {
  // Извлекаем значения фильтров из объекта filters
  const { minPrice, maxPrice, sort } = filters || {};
  // Применяем фильтр по минимальной цене, если minPrice задан
  if (minPrice !== null && minPrice !== undefined) {
    //оставляем только те подукты, у которых цена больше или равна minPrice
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
    // getQuantity(state) {
    //   // Деструктурируем likedProducts из состояния
    //   const { likedProducts } = state;
    //   // Создаем пустой массив для хранения уникальных id товаров
    //   const uniqueIds = [];
    //   // Проверяем, содержится ли id текущего товара в массиве уникальных id
    //   likedProducts.forEach((item) => {
    //     if (!uniqueIds.includes(item.id)) {
    //       //Если нет,то добавляем его в массив
    //       uniqueIds.push(item.id);
    //     }
    //   });
    //   // Получаем количество уникальных id товаров и обновляем состояние
    //   const quantity = uniqueIds.length;
    //   state.likeTotalQuantity = quantity;
    // },

    updateFilters(state, action) {
      // Обновляем фильтры, объединяя текущие фильтры со вновь полученными
      const newFilters = { ...state.filters, ...action.payload };
      // Применяем обновленные фильтры к списку избранных товаров и сортируем их
      const updatedLikedProducts = applyFiltersAndSort(state.likedProducts, newFilters);
      return {
        ...state, // сохраняем все остальные ключи состояния без изменений
        filters: newFilters,// обновляем фильтры
        likedProducts: updatedLikedProducts,// обновляем список избранных товаров с учетом примененных фильтров и сортировки
      };
    },
  },
});

export const { addToLikedProducts, deleteFromLikedProducts, getQuantity, updateFilters } =
  likedProductsSlice.actions;
export { applyFiltersAndSort };
export default likedProductsSlice.reducer;