import React, { useEffect, useRef, useState } from "react";
import AlertaVerde from "./AlertaVerde";
import { useNavigate } from "react-router-dom";

function Formulario({ producto = "" }) {
  const name_input = useRef("");
  const price_input = useRef("");
  const available_input = useRef("");
  const picture_input = useRef("");
  const [status, setStatus] = useState(0);

  let navigate = useNavigate();

  const actualizar = async (e) => {
    try {
      e.preventDefault();
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${producto.id}.json`;
      const body = {
        method: "PUT",
        headers: {},
        body: JSON.stringify({
          name: name_input.current.value,
          price: price_input.current.value,
          available: available_input.current.checked,
          picture: picture_input.current.value,
        }),
      };
      let petcion_put = await fetch(url, body);
      let respuesta = await petcion_put.json();
      setStatus(petcion_put.status);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const crear = async (e) => {
    try {
      e.preventDefault();
      const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products.json`;
      const body = {
        method: "POST",
        headers: {},
        body: JSON.stringify({
          name: name_input.current.value,
          price: price_input.current.value,
          available: available_input.current.checked,
          picture: picture_input.current.value,
        }),
      };
      let peticion_post = await fetch(url, body);
      let respuesta = await peticion_post.json();

      alert("Creado");
    } catch (error) {
      console.error(error);
    }
  };

  const eliminar = async (e) => {
    if (confirm("Estas seguro que quieres eliminar?")) {
      try {
        e.preventDefault();
        const url = `https://flutter-varios-1db01-default-rtdb.firebaseio.com/products/${producto.id}.json`;
        const body = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        let peticion_delete = await fetch(url, body);
        let respuesta = await peticion_delete.json();

        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    }
    return;
  };

  const mostrarMensaje = (mensaje) => {
    setTimeout(() => {
      setStatus(0);
    }, 3000);
    console.log("CORRIO");

    return (
      <>
        {status != 0 ? (
          <AlertaVerde
            mensaje={status === 200 ? mensaje : "Hubo un error"}
            variant={status == 200 ? "success" : "danger"}
          />
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <form className="form p-4 text-center" action="" method="POST">
      <div className="form-floating mb-3">
        <input
          type="text"
          defaultValue={producto.name}
          ref={name_input}
          className="form-control"
          placeholder="Name"
        />
        <label htmlFor="floatingInputDisabled">Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          ref={price_input}
          defaultValue={producto.price}
          type="number"
          step="0.01"
          className="form-control"
          placeholder="Price"
        />
        <label htmlFor="floatingInputDisabled">Price</label>
      </div>

      <div className="mb-3">
        <label htmlFor="floatingInputDisabled m-2">Available </label>

        <input
          className="m-2"
          ref={available_input}
          defaultChecked={producto.available}
          type="checkbox"
          placeholder="Available"
        />
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          defaultValue={producto.picture}
          ref={picture_input}
          className="form-control"
          placeholder="Picture"
        />
        <label htmlFor="floatingInputDisabled">Picture</label>
      </div>

      {producto != '' ? mostrarMensaje("Actualizado") : mostrarMensaje("Creado")}

      <br />
      <button
        className="btn btn-success w-50"
        type="submit"
        onClick={producto != "" ? actualizar : crear}
      >
        {producto != "" ? "Update" : "Crear"}
      </button>
      <br />
      <br />

      {producto != "" ? (
        <button
          className="btn btn-danger w-50"
          type="submit"
          onClick={eliminar}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </form>
  );
}

export default Formulario;
