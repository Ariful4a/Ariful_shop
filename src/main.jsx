
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import './index.css';
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="login" element={<Login/>} />
    <Route path="register" element={<Register></Register>} />
    <Route path="about" element={<About></About>} />
  </Route>
</Routes>
  </BrowserRouter>,
);
