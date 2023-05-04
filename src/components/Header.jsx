import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Header() {
  const auth = useAuth();
  const { displayName } = auth.user;

  return (
    <>
      <header className="header text-center">
        <h1 className="title ">Consumo API Firebase</h1>
        <div className="contenedor_header d-flex justify-content-evenly m-4 mi-background">
          <div className="info_usuario mi-background-azul p-1 m-1">
            <span>
              <Link to={'/cartshop'} className="nav-link"><i className="fas fa-cart-shopping hover-zoom-plus">: 0</i></Link>
            </span>
            <b>Status: {auth.user ? <span> 
              <i className="fas fa-power-off">On</i>
            </span> : <span> 
              <i className="fas fa-power-off">Off</i>
            </span>}</b>

          </div>

          <div>
            <img
              src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
              alt="Firebase"
            />
            <img src={reactLogo} alt="REACT" />
            <img src={viteLogo} alt="VITE" />
            <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" />
          </div>

          <div className="info_usuario mi-background-azul p-1 m-1">
            
            <b>User: {auth.user ? displayName : 'None'} </b>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
