import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProductByCat } from '../../utils/customFetch'
import ItemSingle from './ItemSingle'

function ItemCat() {

    const [items, setItems] = useState()
    const {categoria} = useParams() //useParams se usa para obtener los parametros de la url

    useEffect(() => {
      getProductByCat(categoria)
      .then(response => {setItems(response)})
    }, [categoria])

    return (
      <div>
        <ItemSingle {...items}/>
      </div>
    )
  }

export default ItemCat