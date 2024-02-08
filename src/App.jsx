import "./App.css";
import React from "react";
import { Outlet } from 'react-router-dom'
import Header from './layout/header/Header';

function App() {
  return (
    <div className="App">
        <Header />
           <Outlet />   
      </div>
  );
}

export default App;
