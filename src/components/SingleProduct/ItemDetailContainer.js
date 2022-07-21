import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {doc, getDoc} from 'firebase/firestore'  // Sirve para traer muchos documentos en una coleccion
import {collectionProductos} from '../config/firebase'


function ItemDetailContainer () {

    const [item, setItem] = useState()
    const {id} = useParams() //useParams se usa para obtener los parametros de la url

    useEffect(() => {
      const ref = doc(collectionProductos, id)
      getDoc(ref)
        .then((response)=>{
          setItem({
            id: response.id,
            ...response.data()
          })

        })
      
    }, [id])

    if (item !== {}){
      return (
        <div>
          <ItemDetail {...item}/>
        </div>
      )
    }
    else{
      return (
      <h4 className='txt14d'>Cargando...</h4>
      )
    }
  }

export default ItemDetailContainer