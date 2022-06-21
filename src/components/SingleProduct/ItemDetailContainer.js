import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../utils/customFetch'

function ItemDetailContainer() {

    const [item, setItem] = useState()
    const {id} = useParams() //useParams se usa para obtener los parametros de la url

    useEffect(() => {
      getProductById(parseInt(id))
      .then(response => {setItem(response)})
    }, [])

    return (
      <div>
        <ItemDetail {...item}/>
      </div>
    )
  }

export default ItemDetailContainer