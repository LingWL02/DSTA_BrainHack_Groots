// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrEwRRzWtYRgg7iofSS7bZ8sWPI0QEFw",
  authDomain: "dstabrainhackgroots.firebaseapp.com",
  databaseURL:
    "https://dstabrainhackgroots-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dstabrainhackgroots",
  storageBucket: "dstabrainhackgroots.appspot.com",
  messagingSenderId: "446738999988",
  appId: "1:446738999988:web:797fd754a0b3d1381b45e1",
  measurementId: "G-Y9PZ2FF357",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
