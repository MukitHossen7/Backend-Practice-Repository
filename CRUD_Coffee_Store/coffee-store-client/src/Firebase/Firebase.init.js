import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-sDFsBqz7SOzOEj15guoRFJz797BIzOk",
  authDomain: "coffee-store-ddb68.firebaseapp.com",
  projectId: "coffee-store-ddb68",
  storageBucket: "coffee-store-ddb68.firebasestorage.app",
  messagingSenderId: "871766999144",
  appId: "1:871766999144:web:f1c8bff1a0d5c12a4f7bdd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
