import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() { 
  const {user} = useSelector(state => state.user)
  const {statusLogin} = useSelector(state => state.user)

  const {carroItems} = useSelector(state => state.products)


  return ( 
    <>
      <header className="header text-center">
        <h1 className="title ">Consumo API Firebase</h1>
        <div className="contenedor_header d-flex justify-content-evenly m-4 mi-background">
          <div className="info_usuario mi-background-azul p-1 m-1 hover-zoom-plus">
            <span>
              <Link to={'/cartshop'} className="nav-link"><i className="fas fa-cart-shopping fa-beat hover-zoom-plus">: {carroItems}</i></Link>
            </span>
            <b>Status: {statusLogin  ? <span>  
              <i className="fas fa-power-off">On</i>
            </span> : <span>  
              <i className="fas fa-power-off">Off</i>
            </span>}
            </b>
          </div>

          <div>
            <img className="hover-zoom "
              src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
              alt="Firebase"
            />
            <img className="hover-zoom fa-spin" src={reactLogo} alt="REACT" />
            <img className="hover-zoom" src={viteLogo} alt="VITE" />
            <img className="hover-zoom" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" />
          </div>

          <div className="info_usuario mi-background-azul p-1 m-1 hover-zoom-plus">

          {statusLogin ? <Link to={'/perfil'} className="nav-link hover-zoom-plus"><b><i className="fa-solid fa-user "></i> User: {statusLogin ? user.displayName : 'None'} </b></Link> : <Link to={'/inicio'} className="nav-link hover-zoom-plus"><b><i className="fa-solid fa-user "></i> User: {statusLogin ? user.displayName : 'None'} </b></Link>} 
          


          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
