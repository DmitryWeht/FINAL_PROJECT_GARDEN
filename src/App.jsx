import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/header/Header";

function App() {
  const { key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
