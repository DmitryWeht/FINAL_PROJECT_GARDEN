import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedProducts: [],
    likedIcons: []
}

const likedProductsSlice = createSlice({
    name: 'likedProducts',
    initialState,
    reducers: {
        addToLikedProducts(state, action) {
            state.likedProducts.push(action.payload)
        },
        deleteFromLikedProducts(state, action) {
            state.likedProducts = state.likedProducts.filter(el => el.id !== id.action.payload)
        },


    },

})

export const { addToLikedProducts, deleteFromLikedProducts } = likedProductsSlice.actions
export default likedProductsSlice.reducer;