import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";

function FormularioInicio2() {
  const auth = useAuth()
  const {displayName} = auth.user
  const email_input = useRef("");
  const password_input = useRef("");

  const handleSubmit =  (event) => {
    event.preventDefault();
    const respuesta = auth.login( email_input.current.value, password_input.current.value)
    console.log("EMAIL: ", respuesta);

  };

  const loginGoogle = (event) => {
    event.preventDefault();
    let respuesta = auth.loginWithGoogle()
    console.log("LOGIN GOOGlE", respuesta);

  }

  

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
      <button className="btn btn-warning w-50 m-1" type="submit" onClick={loginGoogle}>
      With <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" height={15}/>
      </button>
    </form>
  );
}

export default FormularioInicio2;
