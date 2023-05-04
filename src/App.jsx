import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import MenuIzquierda from "./components/MenuIzquierda";
import MenuDerecha from "./components/MenuDerecha";
import { useAuth } from "./context/AuthContext";
import CardProduct from "./components/CardProduct";

function App() {
  // authenticacion
  const auth = useAuth();
  const user = auth.user;
  const products = auth.products

  return (
    <>
      <div className="container ">
        <Header />

        <main className="main mi-background" id="main">
          <div
            className="row justify-content-center p-4 gap-2"
            id="row_tarjetas"
          >
            {products == null ? (
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              products.map((item) => {
                return (
                  <CardProduct item={item} key={item.id}/>
                );
              })
            )}
          </div>
        </main>

        <MenuIzquierda />

        {user != "" ? <MenuDerecha /> : ""}
      </div>

      <Footer />
    </>
  );
}

export default App;
