import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "@firebase/auth";
import { useState } from "react";


export const userSlice = createSlice({
    name: "user",
    initialState: { statusLogin: false, user:{} },
    reducers: {
        register: (state, email, password) => {
            const response = createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(response);
        },
        login: (state, email, password) => {
            const response = signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        },
        loginWithGoogle: (state, payload) => {
        console.log(Date())
            state.user = payload.payload;
            state.statusLogin = true;
        },
        logout: (state) => {
            const response = signOut(auth);
            state.user = {}
            state.statusLogin = false
        },
    }
})





export const { register, login, loginWithGoogle, logout, } = userSlice.actions