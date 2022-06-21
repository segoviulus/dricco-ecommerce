import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../utils/customFetch'

function ItemDetailContainer () {

    const [item, setItem] = useState()
    const {id} = useParams() //useParams se usa para obtener los parametros de la url

    useEffect(() => {
      getProductById(parseInt(id))
      .then(response => {setItem(response)})
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