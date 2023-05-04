import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Formulario from "./Formulario";

function MenuDerecha() {
  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="contenedor_btn">
      <div className="contenedor_btn_derecha mi-background-verde">
        <Button
          variant="primary"
          className="btn_contenido rounded-circle"
          onClick={handleShow}
          data-bs-toggle="tooltip" data-bs-placement="left" title="ADD product"
        >
          <span><i className="fas fa-add"></i></span>
          
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formulario />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}

export default MenuDerecha;
