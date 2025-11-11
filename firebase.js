// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXU5MtgMk7XDAVu62MMfvMbiXqci59ogE",
  authDomain: "apptel-b6e5f.firebaseapp.com",
  projectId: "apptel-b6e5f",
  storageBucket: "apptel-b6e5f.appspot.com",
  messagingSenderId: "1020619559043",
  appId: "1:1020619559043:web:696ba222c082f6657a0bb6",
  measurementId: "G-FKNQK2G105"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
