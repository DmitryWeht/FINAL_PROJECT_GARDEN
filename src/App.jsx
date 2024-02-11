import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/Header";
import Footer from "./layout/Footer/Footer";

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
