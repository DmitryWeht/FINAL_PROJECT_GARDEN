import { createSlice } from '@reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
        addCategoriesList(state, action) {
            return action.payload.map((category) => ({ ...category }));
        },
    },
});

export const { addCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer