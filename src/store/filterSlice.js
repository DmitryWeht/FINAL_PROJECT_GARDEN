import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    minPrice: '',
    maxPrice: '',
    showDiscounted: false,
    sort: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // создается и возвращается новый объект состояния.Копируются все свойства текущего состояния, 
        // а затем обновляет minPrice новым значением из action.payload.
        minPriceChange: (state, action) => {
            return { ...state, minPrice: action.payload }
        },
        maxPriceChange: (state, action) => {
            return { ...state, maxPrice: action.payload }
        },
        toggleDiscounted: (state) => {
            return {
                ...state,
                showDiscounted: !state.showDiscounted
            };
        },
        sortChange: (state, action) => {
            return { ...state, sort: action.payload }
        },
        resetFilters: () => initialState,
        },
      })

export const { minPriceChange, maxPriceChange, toggleDiscounted, sortChange, resetFilters } = filterSlice.actions

export default filterSlice.reducer