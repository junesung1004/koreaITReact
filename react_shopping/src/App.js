import { Route,  Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import './App.css'

//npm i react-router-dom @reduxjs/toolkit react-redux react-icons react-loader-spinner

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
