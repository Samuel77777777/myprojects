// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Gaynkxjq-b7-wBPnq0ux9-DOo6czEbk",
  authDomain: "solarrr-d2d5d.firebaseapp.com",
  projectId: "solarrr-d2d5d",
  storageBucket: "solarrr-d2d5d.appspot.com",
  messagingSenderId: "167899419762",
  appId: "1:167899419762:web:3a02067c44465f1b7f1eeb",
  measurementId: "G-LSJ411P47G",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
