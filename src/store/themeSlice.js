import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("light") || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Обновляем состояние темы на противоположное и сохраняем новое значение в localStorage
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
