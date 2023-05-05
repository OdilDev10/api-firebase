import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Disponible from "./Disponible";
import { useEffect } from "react";

function CardProduct({ item }) {
  const auth = useAuth();
  const products = auth.products;

  const setCarroItems = auth.setCarroItems; // items que tiene el carro
  const carroItems = auth.carroItems;
  const cantidadCarroRef = useRef();

  const setCarroProducts = auth.setCarroProducts; //para que el carro reciba los productos
  const carroProducts = auth.carroProducts; 

  const cambiarCantidadPedidos = (e) => {
    const nuevoValor = e.target.value;
    const cantidadPedida = cantidadCarroRef.current.value;

    setCarroItems(carroItems + parseFloat(cantidadPedida));

    const found = products.find((element) => element.id == nuevoValor);
    const productObj = {
      cantidad: parseInt(cantidadPedida),
      element: found
    };
    const newCarroProducts = [...carroProducts, productObj];
    setCarroProducts(newCarroProducts);
    console.log(newCarroProducts, 'carroProducts');
  };

  return (
    <div className="card col-3 mi-background text-center text-decoration-none">
      <img
        src={item.picture}
        className="card-img-top hover-zoom "
        alt={item.name}
      />
      <div className="card-body mi-background mt-2 mb-2">
        <b className="card-title">{item.name}</b>
        <p className="card-text">Price: ${item.price}</p>
        <Disponible item={item} />
        <Link
          to={"/detalles/" + item.id}
          className="btn btn-primary w-100 mt-2"
        >
          Detalles
        </Link>
        <div className="mt-2">
          <button
            className="btn btn-success w-100 "
            onClick={cambiarCantidadPedidos}
            value={item.id}
          >
            Add <i className="fas fa-cart-shopping hover-zoom-plus"></i>
          </button>

          <input
            type="number"
            defaultValue={1}
            min={1}
            max={item.stock}
            className="mt-1"
            ref={cantidadCarroRef}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
