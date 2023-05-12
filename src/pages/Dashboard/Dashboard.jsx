import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MenuIzquierda from "../../components/MenuIzquierda";
import CardProduct from "../../components/CardProduct";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getTotalBuy,
  getTotalPrice,
} from "../../Redux/slices/ProductsSlice";

function Dashboard() {
  const { products } = useSelector((state) => state.products);
  const { allCategories } = useSelector((state) => state.products);
  const { totalPrice } = useSelector((state) => state.products);
  const { totalBuy } = useSelector((state) => state.products);
  const [cantidadProductos, setCantidadProductos] = useState(0)

  const dispatch = useDispatch();

  const calcularTotalProductos = () => {
    let cantidadFinal = products.length
    setCantidadProductos(cantidadFinal)
  }

  const calcularTotalVenta = () => {
    let precios = products.map((item) => parseFloat(item.price));
    let operacion = precios.reduce((total, cantidad2) => total + cantidad2, 0);  
    dispatch(getTotalPrice(operacion.toFixed(2)));
  
    return operacion;
  };
 
  const calcularTotalCompra = () => {
    let precios = products.map((item) => parseFloat(item.ibuy));
    let operacion = precios.reduce((total, cantidad2) => total + cantidad2, 0);
    dispatch(getTotalBuy(operacion.toFixed(2)));

 
    return operacion;
  };

  const categories = () => {
    let list = [];

    let allCategories = products.map((item) => {
      let buscar = list.findIndex((e) => e == item.category);

      if (buscar > -1) {
        return;
      }
      list.push(item.category);
    });

    dispatch(getAllCategories(list));

    return allCategories;
  };

  useEffect(() => {
    calcularTotalProductos()
    categories();
    calcularTotalVenta();
    calcularTotalCompra();
  }, []);

  return (
    <div>
      <div className="container">
        <Header />

        <div className="mi-background mb-2 contenedor_dashboard">
          <h2 className="title text-center">Categorias</h2>

          <div className="row p-4  card_dashboard text-center ">
            <div className="card col-8 ">
              <img
                src="https://thumbs.dreamstime.com/b/products-colorful-stuck-stripes-text-alphabets-written-over-background-79309192.jpg"
                className="card-img-top " 
                alt="products"
              />
              <div className="card-body">
                <h5 className="card-title">Products</h5>
                <p className="card-text">Todos los productos.</p> 
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Items: {cantidadProductos}</li>
                <li className="list-group-item">Categorias: {allCategories.map(item => {
                  return (
                    <span>
                    {item != null ? <i className="mi-background-azul p-1"> {item} </i> : <i className="mi-background-rojo">Undefined</i>}
                    </span>
                  )
                })}</li>
                <li className="list-group-item">
                  Precio Venta: US ${totalPrice}{" "}
                </li>
                <li className="list-group-item">
                  Precio Compra: US ${totalBuy}{" "}
                </li>
              </ul>
              <div className="card-body">
                <Link to={"/productos_crm"} className="btn btn-primary w-75 ">
                  CRM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuIzquierda />
      <Footer />
    </div>
  );
}

export default Dashboard;
