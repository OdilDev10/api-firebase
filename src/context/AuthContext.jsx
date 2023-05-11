import { createContext, useContext, useEffect } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { useState } from "react";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    return console.log("No esta authenticado");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);
  const [carroItems, setCarroItems] = useState(0);
  const [carroProducts, setCarroProducts] = useState([]);


  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("NO HAY USUARIO AUTHENTICADO");
        setUser("");
      } else {
        console.log("ESTA EL USUARIO AUTHENTICADO");
        setUser(currentUser);
      }
    });

    return () => suscribed();
  }, []);

  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const loginWithGoogle = async () => {
    // const response = new GoogleAuthProvider();
    // console.dir(response);
    // return await signInWithPopup(auth, response);
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };


  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
        products,
        carroItems,
        setCarroItems,
        carroProducts,
        setCarroProducts,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
