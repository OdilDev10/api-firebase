import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./pages/Detalles.jsx";
import Inicio from "./pages/Inicio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CartShop from "./pages/CartShop.jsx";
import {Provider} from 'react-redux'
import { store } from "./Redux/store.js";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Store from "./pages/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
