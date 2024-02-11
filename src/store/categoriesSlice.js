import { createSlice } from '@reduxjs/toolkit';


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {

    },
});

export const { addCategoriesList } = categoriesSlice.actions;
export default categoriesSlice.reducer