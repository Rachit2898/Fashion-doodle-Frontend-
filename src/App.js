// App.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getAllRole, getUserByToken } from "../src/redux/features/auth";
import { fetchMessages, addMessage } from "../src/redux/features/user";
import AppRoutes from "./Routes/route";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./App.css";
const firebaseConfig = {
  // Your Firebase project configuration

  apiKey: "AIzaSyAl3MFkXiJ9eVGHKOTQicoqbtKieHt2TEo",
  authDomain: "droodle-3024f.firebaseapp.com",
  projectId: "droodle-3024f",
  storageBucket: "droodle-3024f.appspot.com",
  messagingSenderId: "1091273252625",
  appId: "1:1091273252625:web:75cbc672092bdb720976b0",
  measurementId: "G-7NQ8JC3N2M",
};
firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;

export const database = firebase.database(); // For Real-time Database
// or
export const firestore = firebase.firestore(); // For F
