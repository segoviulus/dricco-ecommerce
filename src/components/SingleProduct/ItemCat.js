import React from 'react'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../GridProducts/Item'
import { getProductByCat } from '../../utils/customFetch'

function ItemCat() {

    const [item, setItem] = useState()
    const {categoria} = useParams() //useParams se usa para obtener los parametros de la url
    console.log(categoria)

    useEffect(() => {
      getProductByCat(categoria)
      .then(response => {setItem(response)})
    }, [])

    return (
      <div>
        <Item {...item}/>
      </div>
    )
  }

export default ItemCat