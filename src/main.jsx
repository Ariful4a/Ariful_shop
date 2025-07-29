
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Pages/MainLayout";
import Home from "./Pages/Home";
import './index.css';
import Products from "./Pages/Products";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
   <Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
  </Route>
</Routes>
  </BrowserRouter>,
);
