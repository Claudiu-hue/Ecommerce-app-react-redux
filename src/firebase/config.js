import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-luca.firebaseapp.com",
  projectId: "eshop-luca",
  storageBucket: "eshop-luca.appspot.com",
  messagingSenderId: "591523911778",
  appId: "1:591523911778:web:1bc1079fc6b8f44239593b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
