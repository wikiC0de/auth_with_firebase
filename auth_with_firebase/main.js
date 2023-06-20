import { handleAuth } from './auth'
// import { handleTodos } from "./todos"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDdZAYRrI9qVzsewdfeIP05QHLN1LmweS0",
  authDomain: "test-movies-a5135.firebaseapp.com",
  projectId: "test-movies-a5135",
  storageBucket: "test-movies-a5135.appspot.com",
  messagingSenderId: "12261154199",
  appId: "1:12261154199:web:2fd9b18847373b6ca4b8d2"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

handleAuth(app)
// handleTodos(db)