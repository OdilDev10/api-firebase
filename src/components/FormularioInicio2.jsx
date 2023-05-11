import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithGoogle } from "../Redux/slices/UserSlice";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebase.config";
import AuthHook from "../Hook/AuthHook";

function FormularioInicio2() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginGoogle } = AuthHook();

  const email_input = useRef("");
  const password_input = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const respuesta = dispatch(
      login(email_input.current.value, password_input.current.value)
    );
    console.log("EMAIL: ", respuesta);
    // location.reload();
  };

  return (
    <form className="form p-4 text-center " onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          defaultValue=""
          ref={email_input}
          className="form-control"
          placeholder="Email"
        />
        <label htmlFor="floatingInputDisabled">Email</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          defaultValue=""
          ref={password_input}
          className="form-control"
          placeholder="Password"
        />
        <label htmlFor="floatingInputDisabled">Password</label>
      </div>

      <button className="btn btn-outline-warning w-50" type="submit">
        With Email
      </button>
      <button
        className="btn btn-warning w-50 m-1"
        type="submit"
        onClick={ loginGoogle}
      >
        With{" "}
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
          alt=""
          height={15}
        />
      </button>
    </form>
  );
}

export default FormularioInicio2;
