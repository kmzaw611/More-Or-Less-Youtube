const firebase = require("firebase/app");
const firebaseApiKey = require("./firebase_api_key");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "moreorless-a4095.firebaseapp.com",
  projectId: "moreorless-a4095",
  storageBucket: "moreorless-a4095.appspot.com",
  messagingSenderId: "424015601080",
  appId: "1:424015601080:web:8d42e101c07e22f9bb034d",
  measurementId: "G-X4F6BXM4WQ",
};

firebase.initializeApp(firebaseConfig);
module.exports = firebase.firestore();
