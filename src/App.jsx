import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/header/Header";

function App() {
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
