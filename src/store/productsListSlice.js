import { createSlice } from "@reduxjs/toolkit";

const productsListSlice = createSlice({
  name: "productsList",
  initialState: {
    pageTitle: {},
    productsList: [],
  },
  reducers: {
    addProductsList(state, action) {
      if (action.payload.category.title) {
        state.pageTitle = action.payload.category.title;
        state.productsList = action.payload.data.map((product) => ({
          ...product,
          showByRange: true,
          showByDiscont: true,
        }));
      } else {
        state.pageTitle = { title: "All products" };
        state.productsList = action.payload.data.map((product) => ({
          ...product,
          showByRange: true,
          showByDiscont: true,
        }));
      }
    },

    addProductsListWithSale(state) {
      state.pageTitle = { title: "Discounted items" };
      state.productsList = state.productsList.filter(
        (product) => product.discont_price
      );
    },

    filter_by_range(state, action) {
      let { from, to } = action.payload;
      if (to === '' || to === 0) {
        to = Infinity;
      }
      if (from === '') {
        from = -Infinity;
      }
      state.productsList = state.productsList.map((elem) => ({
        ...elem,
        showByRange:
          (elem.discont_price ? elem.discont_price : elem.price) >= from &&
          (elem.discont_price ? elem.discont_price : elem.price) <= to,
      }));
    },


    filter_by_discont(state, action) {
      state = {
        ...state,
        productsList: state.productsList.map(elem => {
          if (elem.discont_price === null) {
            elem.showByDiscont = !action.payload
          }
          return elem
        })
      }
    },

    sort_by_default(state) {
      return {
        ...state,
        productsList: [...state.productsList].sort((a, b) => a.id - b.id),
      };
    },

    sort_by_price_desc(state) {
      return {
        ...state,
        productsList: [...state.productsList].sort(
          (a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price)
        ),
      };
    },

    sort_by_price_asc(state) {
      return {
        ...state,
        productsList: [...state.productsList].sort(
          (a, b) =>
            (a.discont_price ? a.discont_price : a.price) -
            (b.discont_price ? b.discont_price : b.price)
        ),
      };
    },

    sort_by_name_az(state) {
      return {
        ...state,
        productsList: [...state.productsList].sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    },

    sort_by_name_za(state) {
      return {
        ...state,
        productsList: [...state.productsList].sort((a, b) =>
          b.title.localeCompare(a.title)
        ),
      };
    },
  },
});

export const {
  addProductsList,
  addProductsListWithSale,
  filter_by_range,
  filter_by_discont,
  sort_by_default,
  sort_by_price_desc,
  sort_by_price_asc,
  sort_by_name_az,
  sort_by_name_za,
} = productsListSlice.actions;

export default productsListSlice.reducer;

