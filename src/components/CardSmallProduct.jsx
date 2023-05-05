import React from 'react'
import { Link } from 'react-router-dom'
import Disponible from './Disponible'

function CardSmallProduct({item}) {
  return (
    <div className="card mb-3 " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.picture} className="img-fluid rounded-start" alt={item.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5>{item.name}</h5>
        <p className="card-text">Price: ${item.price}</p>

          <Disponible item={item}/>

        <Link
          to={"/detalles/" + item.id}
          className="btn btn-primary w-50 mt-2 "
        >
          Detalles
        </Link>
        <Link
          to={"/detalles/" + item.id}
          className="btn btn-success w-50 mt-2 "
        >
          Add <i className="fas fa-cart-shopping hover-zoom-plus"></i>
        </Link>

      </div>
    </div>
  </div>
</div>
  )
}

export default CardSmallProduct