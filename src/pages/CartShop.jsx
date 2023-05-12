import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuIzquierda from "../components/MenuIzquierda";
import MenuDerecha from "../components/MenuDerecha";
import CardSmallProduct from "../components/CardSmallProduct";
import Disponible from "../components/Disponible";
import { useDispatch, useSelector } from "react-redux";
import { compra, getPrecioFinal } from "../Redux/slices/ProductsSlice";
import { Spinner } from "react-bootstrap";

function CartShop() {
  const { selectProducts } = useSelector((state) => state.products);
  const { precioFinal } = useSelector((state) => state.products);

  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getPrecioFinalLocal = () => {
    let precioGeneral = 0;
    for (let i = 0; i < selectProducts.length; i++) {
      let element = selectProducts[i];
      let cantidad = element.cantidad;
      let precio = parseFloat(element.element.price);

      let p = cantidad * precio;
      precioGeneral += p;
    }
    dispatch(getPrecioFinal(precioGeneral.toFixed(2)));
    console.log(precioFinal, "precioFinal");
  };

  useEffect(() => {
    getPrecioFinalLocal();
  }, [selectProducts]);

  const mapeo = () => {
    {
      products.slice(0, 5).map((item) => {
        return <CardSmallProduct item={item} key={item.id} />;
      });
    }
  };

  const comprarLocal = () => {
    alert('Gracias Por su compra')
    dispatch(compra())

  }

  return (
    <div>
      <div className="container">
        <Header />

        <div className="d-flex gap-2 cartshop">
          <aside className="aside flex-shrink-1 mi-background aside_productos text-center">
            <h3>Recomendaciones</h3>

            {products.length > -1 ? (
              products.slice(0, 5).map((item) => {
                return <CardSmallProduct item={item} key={item.id} />;
              })
            ) : (
              <Spinner />
            )}
          </aside>
          <main className="main flex-grow-1 mi-background w-75">
            <h3 className="text-center">Your Products</h3>
            <div>
              {selectProducts.length <= 0 ? (
                <div className="text-center">
                  <span className="fw-light">No hay productos en el carro...</span>
                </div>
              ) : (
                selectProducts.map((item, index) => {
                  return (
                    <div className="card mb-3 cardCartShop m-1" key={index}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            className="card-img-top"
                            src={item.element.picture}
                            alt={item.element.name}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body mi-background-azul h-100">
                            <h5 className="card-title">
                              Product: {item.element.name}
                            </h5>
                            <p className="card-text">
                              Price: ${item.element.price}
                            </p>
                            <p className="card-text">
                              Cantidad: {item.cantidad}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </main>
          <aside className="aside flex-shrink-1 mi-background w-25 aside_comprar text-center d-flex flex-column justify-content-between p-1">
            <h3>Pago</h3>
            <div className="btn_compra mb-2">
              <h4>Total: ${precioFinal} </h4>
              <button className="btn btn-success w-100 " onClick={comprarLocal}>Comprar</button>
            </div>
          </aside>
        </div>

        <MenuIzquierda />
        {/* {user != "" ? <MenuDerecha /> : ""} */}
      </div>
      <Footer />
    </div>
  );
}

export default CartShop;
