// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWQn2v8gQTQrZauKHgu1Ti6CxiAeoTg7Y",
  authDomain: "authentication-react-app-856c6.firebaseapp.com",
  projectId: "authentication-react-app-856c6",
  storageBucket: "authentication-react-app-856c6.appspot.com",
  messagingSenderId: "917484569238",
  appId: "1:917484569238:web:cc2a4159bf9f33aaf5f8b7",
  measurementId: "G-WZXTWSLQ8E"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );

// const analytics = getAnalytics( FirebaseApp );
