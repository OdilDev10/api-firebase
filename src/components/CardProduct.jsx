import React from "react";
import { Link } from "react-router-dom";

function CardProduct({item}) {
  return (
    <div
      className="card col-3 mi-background text-center text-decoration-none"
    >
      <img
        src={item.picture}
        className="card-img-top hover-zoom "
        alt={item.name}
      />
      <div className="card-body mi-background mt-2 mb-2">
        <b className="card-title">{item.name}</b>
        <p className="card-text">Price: ${item.price}</p>
        {item.available ? (
          <span className="m-1 bg-success rounded-pill p-2">Available</span>
        ) : (
          <span className="m-1 bg-danger rounded-pill p-2">Off</span>
        )}
        <Link
          to={"/detalles/" + item.id}
          className="btn btn-primary w-100 mt-2"
        >
          Detalles
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
