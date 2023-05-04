import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuIzquierda from "../components/MenuIzquierda";
import MenuDerecha from "../components/MenuDerecha";
import { useAuth } from "../context/AuthContext";
import CardSmallProduct from "../components/CardSmallProduct";

function CartShop() {
  const auth = useAuth();
  const user = auth.user;
  const products = auth.products;

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
          <main className="main flex-grow-1 mi-background w-75">Your Products</main>
          <aside className="aside flex-shrink-1 mi-background w-25 aside_comprar text-center">
            <h3>Pago</h3>
            <h4>Total: $0.00</h4>
            <button className="btn btn-success w-100 ">Comprar</button>
          </aside>
        </div>

        <MenuIzquierda />
        {user != "" ? <MenuDerecha /> : ""}

        <Footer />
      </div>
    </div>
  );
}

export default CartShop;
