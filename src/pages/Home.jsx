import React, { useEffect, useState } from "react";
import MenuIzquierda from "../components/MenuIzquierda";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactLogo from "../assets/react.svg";
import ViteLogo from "../../public/vite.svg";
import { Button, Card, Nav } from "react-bootstrap";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { peticionProducto } from "../services/productos.api.services";
import { getAll } from "../Redux/slices/ProductsSlice";
import { useDispatch } from "react-redux";

function Home() {
  const [content, setContent] = useState(0);
  const dispatch = useDispatch()



  return (
    <div>
      <div className="container">
        <Header />

        <h1 className="title text-center">HOME</h1>

        <div className="mi-background w-75 m-auto">
          <Card className="">
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link eventKey="#react" onClick={() => setContent(0)}>
                    React
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="#rfirebase" onClick={() => setContent(1)}>
                    Firebase
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="#bootstrap" onClick={() => setContent(2)}>
                    Bootstrap
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="#vite" onClick={() => setContent(3)}>
                    Vite
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body>
              <Card.Title>Technologies</Card.Title>
              <Card.Text>
                <CardTech selected={content} />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <MenuIzquierda />

      <Footer />
    </div>
  );
}

export default Home;

const CardTech = ({ selected }) => {
  const techs = [
    {
      description:
        "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.",
      img: "http://localhost:5173/src/assets/react.svg",
      title: "React Js",
      documentacion: "https://es.react.dev/",
      experiencie: "6 Months",
    },
    {
      description:
        "Firebase es una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles lanzada en 2011 y adquirida por Google en 2014.",
      img: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
      title: "Firebase",
      documentacion: "https://firebase.google.com/?hl=es",
      experiencie: "2 Weeks",
    },
    {
      description:
        "Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.",
      img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      title: "Bootstrap",
      documentacion:
        "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
      experiencie: "1 Year",
    },
    {
      description:
        "Vite es un servidor de desarrollo local escrito por Evan You y utilizado de forma predeterminada por las plantillas de proyecto de Vue. Tiene soporte para TypeScript y JSX.",
      img: "http://localhost:5173/vite.svg",
      title: "Vite Js",
      documentacion: "https://vitejs.dev/",
      experiencie: "6 Months",
    },
  ];

  let element = techs[selected];

  console.log(element);

  return (
    <div className="mi-background p-3">
      <img src={element.img} alt="" height={50}/> <b>{element.description}</b>
      <br />
      <div className="text-center">
        <div className="mi-background-rojo m-2">
          <h4>My Experiencie</h4>
          {element.experiencie}
        </div>
        <a href={element.documentacion} target="_blank" className="btn btn-primary ">Documentacion</a>
      </div>
    </div>
  );
};
