import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import "semantic-ui-css/semantic.min.css";
import "./assets/css/App.css";
import App from "./components/App";

const firebaseConfig = {
  apiKey: "AIzaSyCtp3Da5w2gjGLLbAYlcnTa_uHTmJoc_rI",
  authDomain: "moreorless-a4095.firebaseapp.com",
  projectId: "moreorless-a4095",
  storageBucket: "moreorless-a4095.appspot.com",
  messagingSenderId: "424015601080",
  appId: "1:424015601080:web:8d42e101c07e22f9bb034d",
  measurementId: "G-X4F6BXM4WQ",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.querySelector("#root"));
