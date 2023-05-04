import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormularioInicio from "../components/FormularioInicio";
import FormularioInicio2 from "../components/FormularioInicio2";
import MenuIzquierda from "../components/MenuIzquierda";

function Inicio() {


  return (
    <div>

      <div className="container">
        <Header />

        <div className="d-flex ">
          <div className="w-50 text-center p-4 m-2 mi-background-azul">
            <h3>Form Register</h3>

          <FormularioInicio/>
          </div>
          <div className="w-50 text-center p-4 m-2 mi-background-azul">
            <h3>Form Login</h3>

      <FormularioInicio2/>
            
          </div>
        </div>

        <MenuIzquierda/>
      </div>
      <Footer />
    </div>
  );
}

export default Inicio;
