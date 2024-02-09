import { createSlice } from '@reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        addCategoriesList(state, action) {
            console.log('redux start');
            return action.payload.map((category) => ({ ...category }));
        },
    },
});

export const { addCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer