import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Disponible from "./Disponible";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemsCart,
  itemsCart,
  updateItemsCart,
} from "../Redux/slices/ProductsSlice";

import { Toast } from "react-bootstrap";


function CardProduct({ item }) {
  const dispatch = useDispatch();
  const cantidadCarroRef = useRef();
  const { selectProducts } = useSelector((state) => state.products);


  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const cambiarCantidadPedidos = (item) => {
    const cantidadPedida = cantidadCarroRef.current.value;

    // SI NO TIENE STOCK
    if (item.stock <= 0) {
      // handleShow2();
      setShowA(true);
      return;
    }
    const productObj = {
      cantidad: parseInt(cantidadPedida),
      element: item,
    };

    // ACTUALIZAR CANTIDAD PEDIDA
    let posicion = selectProducts.findIndex(
      (item) => item.element.id == productObj.element.id
    );
    if (posicion > -1) {
      let element = selectProducts[posicion].element.id;
      let update = {
        elementId: element,
        cantidad: parseInt(cantidadPedida),
      };

      return dispatch(updateItemsCart(update));
    }

    let found = selectProducts.find((canti) => canti.id == item.id);
    console.log(found);

    dispatch(itemsCart(productObj));
  };

  const eliminarItemCarro = (item) => {
    let product = {
      id: item.id,
      cantidad: parseInt(cantidadCarroRef.current.value),
    };
    dispatch(deleteItemsCart(product));
  };

  const itemsSeleccionados = (id) => {
    let found = selectProducts.find((pro) => pro.element.id == id);
    if (found != null) {
      console.log(found.cantidad);
      return parseInt(found.cantidad);
    }
    return 0;
  };
  

  let style1 =
    "card col-3 mi-background text-center text-decoration-none border border-success "; 
  let style2 = "card col-3 mi-background text-center text-decoration-none ";
 
  return (
    <div className={itemsSeleccionados(item.id) > 0 ? style1 : style2}>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Info</strong>
          <small>{item.name}</small>
        </Toast.Header>
        <Toast.Body>No puedes agregar este  item a el carro, Quedan {item.stock} en el inventario.</Toast.Body>
      </Toast>

      <img
        src={item.picture != "" ? item.picture : "https://placehold.co/600x400"}
        className="card-img-top hover-zoom "
        alt={item.name}
      />

      <div className="card-body mi-background mt-2 mb-2">
        <b className="card-title">{item.name}</b> 

        <p className="card-text">
          <span className="mi-background-verde">Price: ${item.price}</span> <br /> <span className="mi-background">Category: {item.category}</span></p>
        <p className="card-text">
          <i className="fa-solid fa-fire fa-bounce"></i> <span className="mi-background">In Cart{" "}
          {itemsSeleccionados(item.id)}</span>
        </p> 
 
        <Disponible item={item} />
        <Link
          to={"/detalles/" + item.id}
          className="btn btn-primary w-100 mt-2"
        >
          Detalles{" "}
          <i className="fa-solid fa-circle-info hover-zoom-plus"></i>
        </Link>
        <div className="mt-2">
          <button
            className="btn btn-success w-100 "
            onClick={() => cambiarCantidadPedidos(item)}
            value={item.id}
          >
            Add <i className="fas fa-cart-shopping hover-zoom-plus"></i>
          </button>

          <input
            type="number"
            defaultValue={item.stock <= 0 ? 0 : 1}
            min={item.stock <= 0 ? 0 : 1}
            max={item.stock}
            className="mt-1 form-control"
            ref={cantidadCarroRef}
          />

          <button
            className="btn btn-danger w-100 "
            onClick={() => eliminarItemCarro(item)}
            value={item.id}
          >
            Remove <i className="fas fa-cart-shopping hover-zoom-plus"></i>
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default CardProduct;
