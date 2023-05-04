import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./pages/Detalles.jsx";
import Inicio from "./pages/Inicio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import CartShop from "./pages/CartShop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cartshop" element={<CartShop />} />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
