import React from 'react'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import productList from '../../utils/productList'
import customFetch from '../../utils/customFetch'

function ItemDetailContainer() {
    const [item, setItem] = useState([])
  
    useEffect(() => {
      customFetch(2000, productList) //demora de 2 seg para simular la carga de productos
      .then(resultado => setItem(resultado)) //"resultado" puede ser cualquier nombre en ambos casos
    }, [item])
    return (
      <div>
        <ItemDetail productList={item}/>
      </div>
      
    )
  }

export default ItemDetailContainer