import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvYmvdUDWehzbdSft5pwsw54mmkuf-0oU",
  authDomain: "clone-153b6.firebaseapp.com",
  projectId: "clone-153b6",
  storageBucket: "clone-153b6.appspot.com",
  messagingSenderId: "860432028386",
  appId: "1:860432028386:web:f467df2d65d6c0d30d04bb",
  measurementId: "G-M133C4NK23",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
