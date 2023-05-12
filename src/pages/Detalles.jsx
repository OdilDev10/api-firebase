import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";

import MenuIzquierda from "../components/MenuIzquierda";
import Disponible from "../components/Disponible";

function Detalles() {
  const { id } = useParams("id");
  const [producto, setProducto] = useState({});
  const [imgActual, setImgActual] = useState(0);
  const [img, setImg] = useState([]);

  const peticion = async (id) => {
    try {
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${id}.json`;
      let petcion_get = await fetch(url);
      let respuesta = await petcion_get.json();

      respuesta["id"] = id;
      setProducto(respuesta);

      let pictures = Object.values(respuesta.pictures).map(item => item)
      setImg(pictures)

      // setImg([
      //   respuesta.picture,
      //   respuesta.picture2 ?? "https://placehold.co/600x400",
      //   respuesta.picture3 ?? "https://placehold.co/600x400",
      //   respuesta.picture4 ?? "https://placehold.co/600x400",
      // ]);
      

      console.log(pictures);
    } catch (error) {
      console.error(error);
    }
  };

  const cambiarImg = (img) => {
    setImgActual(img);
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
              <img src={img[imgActual]} className="card-img-top " alt={producto.name} />
              <div className="container_imagenes mi-background">
              
              {img.map((item, index) => {
                
                return(
                  <img
                  src={img[index]}
                  alt={producto.name}
                  className="mi-background"
                  onClick={() => cambiarImg(index)}
                />
                )
              })}
               
              </div>
              <div className="card-body text-center mi-background-verde">
                <i className="fas fa-cart-shopping carrito_grande hover-zoom-plus"></i>
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">Price: ${producto.price}</p>
                <p className="card-text">Category: {producto.category}</p>

                <Disponible item={producto} />
              </div>
            </div>

            <div className="card mt-2 mb-2 mi-background-verde">
              <Formulario producto={producto} />
              {/* {user != '' ? <Formulario producto={producto} /> : ""} */}
            </div>
          </>
        )}

        <MenuIzquierda />
      </div>

      <Footer />
    </div>
  );
}

export default Detalles;
