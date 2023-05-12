import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React, { useEffect } from "react";
import { loginWithGoogle } from "../Redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const AuthHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginGoogle = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      let user = userCredential.user;
      dispatch(loginWithGoogle(user));
      navigate('/store')
    } catch (error) {
      console.log(error);
    }
  };

  return { loginGoogle };
};

export default AuthHook;
