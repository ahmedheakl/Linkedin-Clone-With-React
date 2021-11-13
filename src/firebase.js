// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDScKNgX7DYX0saped7UIu_6Oi_Zo1czfI",
  authDomain: "linkedin-clone-dfb81.firebaseapp.com",
  projectId: "linkedin-clone-dfb81",
  storageBucket: "linkedin-clone-dfb81.appspot.com",
  messagingSenderId: "863829109491",
  appId: "1:863829109491:web:17d4a38f1b31cfd01e6586",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
