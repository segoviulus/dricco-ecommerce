import React from 'react'
import { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch'
import productList from '../../utils/productList'
import ItemList from './ItemList'

function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(3000, productList) //demora de 3 seg para simular la carga de productos
    .then(resultado => setItems(resultado)) //"resultado" puede ser cualquier nombre en ambos casos
  }, [items])
  return (
    <div className='cardList'>
      <ItemList productList={items}/>
    </div>
    
  )
}

export default ItemListContainer