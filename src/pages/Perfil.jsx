import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuIzquierda from "../components/MenuIzquierda";
import "../Perfil.css";
import { useSelector } from "react-redux";

function Perfil() {
  const { user } = useSelector((state) => state.user);

  console.log(user.photoURL);

  const userInfo = user.reloadUserInfo;
  return (
    <div>
      <div className="container">
        <Header />

        <div>
          <h2 className="title text-center">Perfil</h2>

          <div className="">
            <div className="card_perfil  mi-background">
              <div className="card_informaciones mi-background">
                <div className="card_img mi-background">
                  <img src={user.photoURL != '' ? user.photoURL : ""} alt="User Image"  />
                </div>
                <div className="card_info mi-background-verde">
                  <h3 className="title text-center p-2">Info</h3>
                  <p>
                    <span>
                      <b>Name: </b> {user.displayName}
                    </span>
                    <br />
                    <span>
                      <b>Email: </b> {user.email}
                    </span>
                    <br />
                    <span>
                      <b>emailVerified: </b>{" "}
                      {user.emailVerified ? (
                        <span>
                          Verificado{" "}
                          <i className="fa-solid fa-check-double fa-bounce"></i>
                        </span>
                      ) : (
                        <span>
                          Nop <i className="fa-solid fa-ban fa-spin"></i>
                        </span>
                      )}
                    </span>
                    <br />
                    <span>
                      <b>lastSignInTime: </b> {user.metadata.lastSignInTime}
                    </span>
                    <br />
                    <span>
                      <b>phoneNumber: </b> {user.phoneNumber != null ? user.phoneNumber : <span>
                          Nop <i className="fa-solid fa-ban fa-spin"></i>
                        </span> }
                    </span>
                    <br />
                    <span>
                      <b>uid: </b> {user.uid}
                    </span>
                  </p>
                </div>
              </div>
              <div className="card_actions mi-background-azul p-2">
                  <p>
                  <span>
                      <b>Position: </b> Admin <i className="fa-solid fa-unlock"></i>
                    </span>
                  </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuIzquierda />
      <Footer />
    </div>
  );
}

export default Perfil;
