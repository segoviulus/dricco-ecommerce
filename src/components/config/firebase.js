import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBj1CnMWJ4TF7cIiLdOIKZhd5s5vuXYLGA",
  authDomain: "react-ecoomerce-e817a.firebaseapp.com",
  projectId: "react-ecoomerce-e817a",
  storageBucket: "react-ecoomerce-e817a.appspot.com",
  messagingSenderId: "76764013903",
  appId: "1:76764013903:web:c6576315945a18dce5113a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const collectionProductos = collection(db, 'productos') // Referencia a la coleccion