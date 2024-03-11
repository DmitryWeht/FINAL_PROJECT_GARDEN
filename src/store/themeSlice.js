// Импортируем функцию создания слайса из Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Определяем начальное состояние слайса.
// Используем значение 'light' или 'dark', сохраненное в localStorage, с фолбэком на 'dark', если значение отсутствует
const initialState = {
  theme: localStorage.getItem("light") || "dark",
};

// Создаем слайс состояния для темы приложения
const themeSlice = createSlice({
  name: "theme", // Указываем название слайса
  initialState, // Инициализируем слайс с начальным состоянием
  reducers: {
    // Определяем редьюсеры для обновления состояния
    // Редьюсер для переключения темы между 'light' и 'dark'
    toggleTheme: (state) => {
      // Обновляем состояние темы на противоположное и сохраняем новое значение в localStorage
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
  },
});

// Экспортируем действие toggleTheme для использования в компонентах
export const { toggleTheme } = themeSlice.actions;
// Экспортируем редьюсер для интеграции с хранилищем Redux
export default themeSlice.reducer;
