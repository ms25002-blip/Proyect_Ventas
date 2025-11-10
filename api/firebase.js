import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXU5MtgMk7XDAVu62MMfvMbiXqci59ogE",
  authDomain: "apptel-b6e5f.firebaseapp.com",
  projectId: "apptel-b6e5f",
  storageBucket: "apptel-b6e5f.firebasestorage.app",
  messagingSenderId: "1020619559043",
  appId: "1:1020619559043:web:696ba222c082f6657a0bb6",
  measurementId: "G-FKNQK2G105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  inicar y explorar servidores
// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };