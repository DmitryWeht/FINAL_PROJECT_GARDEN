import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage.jsx";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import SalePage from "./pages/SalePage/SalePage.jsx";
import SingleCategoryPage from "./pages/SingleCategoryPage/SingleCategoryPage.jsx";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.jsx";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:id",
        element: <SingleCategoryPage />,
      },

      {
        path: "/products",
        element: <AllProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/categories/:id/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/sales/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/sales",
        element: <SalePage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
