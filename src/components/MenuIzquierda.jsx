import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Formulario from "./Formulario";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/slices/UserSlice";

function MenuIzquierda() {
  const { user } = useSelector((state) => state.user);
  const { statusLogin } = useSelector((state) => state.user);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // LOGOUT
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const logoutLocal = () => {
    dispatch(logout());
    navigate("/inicio");
    location.reload()
  };

  return (
    <nav className="contenedor_btn">
      <div className="contenedor_btn_izquierda mi-background-verde">
        <Link
          className="btn_contenido rounded-circle hover-zoom-plus"
          to={"/"}
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Home"
        >
          <span>
            <i className="fas fa-home"></i>
          </span>
        </Link>

        {statusLogin ? null : (
          <Link
            className="btn_contenido rounded-circle hover-zoom-plus"
            to={"/inicio"}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Login or Register"
          >
            <span>
              <i className="fas fa-user"></i>
            </span>
          </Link>
        )}

        {statusLogin ? (
          <Link
            className="btn_contenido rounded-circle hover-zoom-plus"
            to={"/store"}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Store"
          >
            <span>
              <i className="fas fa-store"></i>
            </span>
          </Link>
        ) : null}

        {statusLogin ?  (
          <Link
            className="btn_contenido rounded-circle hover-zoom-plus"
            to={"/dashboard"}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Dashboard"
          >
            <span>
              <i className="fas fa-gauge"></i>
            </span>
          </Link>
        ) : null}

        {statusLogin ? (
          <Link
            className="btn_contenido rounded-circle hover-zoom-plus"
            onClick={handleShow2}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Logout"
          >
            <span>
              <i className="fas fa-user-minus"></i>
            </span>
          </Link>
        ) : null}

        {/* CREAR */}
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

        {/* LOGOUT */}
        <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Quieres cerrar sesion?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cancel
          </Button>
          <Button variant="danger" onClick={logoutLocal}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    </nav>
  );
}

export default MenuIzquierda;
