import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuIzquierda from "../components/MenuIzquierda";
import MenuDerecha from "../components/MenuDerecha";
import { useAuth } from "../context/AuthContext";
import CardSmallProduct from "../components/CardSmallProduct";
import Disponible from "../components/Disponible";

function CartShop() {
  const auth = useAuth();
  const user = auth.user;
  const products = auth.products;
  const carroProducts = auth.carroProducts;

  const [precioFinal, setPrecioFinal] = useState(0)


  console.log(carroProducts)
 
  return (
    <div>
      <div className="container">
        <Header />

        <div className="d-flex gap-2 cartshop">
          <aside className="aside flex-shrink-1 mi-background aside_productos text-center">
            <h3>Recomendaciones</h3>
            {products.slice(0, 5).map((item) => {
              return <CardSmallProduct item={item} key={item.id} />;
            })}
          </aside>
          <main className="main flex-grow-1 mi-background w-75">
            <h3>Your Products</h3>
            <div>

              {carroProducts.element}
            
              {/* {Object.values(carroProducts.element).map((item, index) => {
                  console.log(item);
                
                return (
                  <div className="card mb-3" key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.picture}
                          className="img-fluid rounded-start"
                          alt={item.name}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name} ${item.price}</h5>
                          <p className="card-text">
                            
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              <Disponible item={item}/>
                              
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </main>
          <aside className="aside flex-shrink-1 mi-background w-25 aside_comprar text-center">
            <h3>Pago</h3>
            <h4>Total: $0.00</h4>
            <button className="btn btn-success w-100 ">Comprar</button>
          </aside>
        </div>

        <MenuIzquierda />
        {user != "" ? <MenuDerecha /> : ""}
      </div>
      <Footer />
    </div>
  );
}

export default CartShop;
