import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
