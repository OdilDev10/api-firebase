import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

import MenuIzquierda from "../components/MenuIzquierda";
import { useAuth } from "../context/AuthContext";

function Detalles() {
  const auth = useAuth()
  const user = auth.user

  const { id } = useParams("id");
  const [producto, setProducto] = useState({})

  const peticion = async (id) => {
    try {
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${id}.json`;

      let petcion_get = await fetch(url);
      let respuesta = await petcion_get.json();

      respuesta['id'] = id
      setProducto(respuesta)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    return () => {
      peticion(id);
    };
  }, []);

  return (
    <div>

      <div className="container justify-content-center ">
      <Header />

        {producto == null ? (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <div className="card card-detail mi-background">
              <img
                src={producto.picture}
                className="card-img-top hover-zoom"
                alt={producto.name}
              />
              <div className="card-body text-center mi-background-verde">
                <i className="fas fa-cart-shopping carrito_grande hover-zoom-plus"></i>
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.price}</p>
                {producto.available ? (
                  <span className="bg-success rounded-pill p-2">Available</span>
                ) : (
                  <span className="mb bg-danger rounded-pill p-2">Off</span>
                )}
              </div>
            </div>

            <div className="card mt-2 mb-2 mi-background-verde">

              {user != '' ? <Formulario producto={producto} /> : ""}

            </div>
          </>
        )}

        <MenuIzquierda/>
      </div>

      <Footer />
    </div>
  );
}

export default Detalles;
