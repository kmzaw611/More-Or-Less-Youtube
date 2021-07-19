import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "moreorless-a4095.firebaseapp.com",
  projectId: "moreorless-a4095",
  storageBucket: "moreorless-a4095.appspot.com",
  messagingSenderId: "424015601080",
  appId: "1:424015601080:web:8d42e101c07e22f9bb034d",
  measurementId: "G-X4F6BXM4WQ",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;
