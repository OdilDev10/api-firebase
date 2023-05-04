import { initializeApp } from "firebase/app";
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcLVWFmzEHHxEaZc57aMhvy7Wa90mMvC8",
  authDomain: "flutter-varios-1db01.firebaseapp.com",
  databaseURL: "https://flutter-varios-1db01-default-rtdb.firebaseio.com",
  projectId: "flutter-varios-1db01",
  storageBucket: "flutter-varios-1db01.appspot.com",
  messagingSenderId: "60986309262",
  appId: "1:60986309262:web:0d5211f7e2559a8aaf27df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

