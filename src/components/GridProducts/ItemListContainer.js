import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from "react-router-dom"
import ItemList from './ItemList'
import {collectionProductos} from '../../config/firebase'
import {getDocs, query, where} from 'firebase/firestore'  // Sirve para traer muchos documentos en una coleccion
//  collection: Evito usar query y puedo generarlo a travez del mismo




function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoria} = useParams();


  useEffect(() => {
    const ref = categoria
    ? query(collectionProductos, where('categoria', '==', categoria))
    : collectionProductos


    //const collectionProductos = collection(db, "productos") // Referencia a la coleccion creada en firebase.js
    //const consulta = getDocs(collectionProductos) // Hago la consulta = getDocs(collection(db, "productos"))
    getDocs(ref)
    .then ((response) => {  // console.log (consulta) Devuelve una Promise, esto deriva en el uso del then catch
    const productList_map = response.docs.map(referencia => { //console.log(response.docs) // .docs es el array que me trae dentro de la representacion de datos que me trae (objeto)
    

    const productos = referencia.data()
    productos.id = referencia.id
    return productos
})
    
    setItems(productList_map)
    
    })

    .catch ((error) => {
      console.log(error)
    })

  }, [items, categoria])

  if (items.length > 0)

  return (
    <div className='cardList'>
      <ItemList productList={items}/>
    </div>
    
  )
}

export default ItemListContainer