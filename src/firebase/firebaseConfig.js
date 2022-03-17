// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRW--b0J14kedyvul1X1ygdn0bkeNl7QE",
  authDomain: "consultasgit.firebaseapp.com",
  projectId: "consultasgit",
  storageBucket: "consultasgit.appspot.com",
  messagingSenderId: "231834732821",
  appId: "1:231834732821:web:ff23e966a17f9f4b62c11c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
    app,
    db,
    google,
    facebook
}