import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHRyIav6bbvAPMJG6pL0m3zrAXx8G54rw",
  authDomain: "react-ecommerce-189a6.firebaseapp.com",
  projectId: "react-ecommerce-189a6",
  storageBucket: "react-ecommerce-189a6.appspot.com",
  messagingSenderId: "961626768208",
  appId: "1:961626768208:web:02b4213d804bbd63f0e255"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const collectionProductos = collection(db, 'productos') // Referencia a la coleccion