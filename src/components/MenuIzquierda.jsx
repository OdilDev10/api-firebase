import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Formulario from './Formulario';
import { useAuth } from '../context/AuthContext';

function MenuIzquierda() {
  const auth = useAuth()
  const user = auth.user
  const navigate = useNavigate()

     
      // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const logout = () => {
    auth.logout()  
    navigate('/inicio')
  }

  return (
    <nav className="contenedor_btn">

    <div className="contenedor_btn_izquierda mi-background-verde">
    <Link className="btn_contenido rounded-circle" to={'/'} data-bs-toggle="tooltip" data-bs-placement="right" title="Home"><span><i className="fas fa-home"></i></span></Link>

    {user ? null : <Link className="btn_contenido rounded-circle" to={'/inicio'} data-bs-toggle="tooltip" data-bs-placement="right" title="Login or Register"><span><i className="fas fa-user"></i></span></Link>}
    {user ? <Link className="btn_contenido rounded-circle"  onClick={logout} data-bs-toggle="tooltip" data-bs-placement="right" title="Logout"><span><i className="fas fa-user-minus"></i></span></Link> : null}



    <Modal show={show} onHide={handleClose} > 
        <Modal.Header closeButton>
          <Modal.Title>Crear Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formulario/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            
            Close
            
          </Button>
          
        </Modal.Footer>
      </Modal>
 
  </div>
  </nav>

  )
}

export default MenuIzquierda