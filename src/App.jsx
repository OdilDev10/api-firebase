import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalles from "./pages/Detalles";
import Inicio from "./pages/Inicio.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CartShop from "./pages/CartShop.jsx";
import {Provider, useDispatch, useSelector} from 'react-redux'
import { store } from "./Redux/store.js";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Store from "./pages/Store.jsx";
import Perfil from "./pages/Perfil";
import Products from "./pages/Dashboard/products/Products";


function App() {

  return ( 
    <div id="app" className="">
      <div className="circulos_fondo_1 mi-background-azul"></div>
      <div className="paralelogramo"></div>

      <div className="circulos_fondo_2"></div>

    <Provider store={store}>

      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cartshop" element={<CartShop />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productos_crm" element={<Products />} />

      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
