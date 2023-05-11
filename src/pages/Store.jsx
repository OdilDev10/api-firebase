import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import MenuIzquierda from "../components/MenuIzquierda";
import MenuDerecha from "../components/MenuDerecha";
import CardProduct from "../components/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../Redux/slices/ProductsSlice";
import { peticionProducto } from "../services/productos.api.services";
import { Spinner } from "react-bootstrap";

function Store() {
  // authenticacion
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await peticionProducto();
  //     dispatch(getAll(data));
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="container ">
        <Header />
        <main className="main mi-background" id="main">
          <div
            className="row justify-content-center p-4 gap-2"
            id="row_tarjetas"
          >
            {products.length === 0 ? (
              <Spinner/>
            ) : (
              products?.map((item) => {
                return <CardProduct item={item} key={item.id} />;
              })
            )}
          </div>
        </main>

        <MenuIzquierda />
        <MenuDerecha /> 
        {/* {user != "" ? <MenuDerecha /> : ""} */}
      </div>
      <Footer />
    </>
  );
}

export default Store;
