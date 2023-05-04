import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";

function FormularioInicio() {
  const auth = useAuth()
  const email_input = useRef("");
  const password_input = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = email_input.current.value;
    const password = password_input.current.value;

    let response = auth.register(email, password)
    console.log(response);
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

      <button className="btn btn-outline-warning w-50 m-1" type="submit">
        With Email
      </button>
      <br />

      <button className="btn btn-warning w-50 m-1" type="submit">
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

export default FormularioInicio;
