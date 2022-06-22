import React from 'react'
import { useState, useEffect } from 'react'
import { customFetch } from '../../utils/customFetch'
import productList from '../../utils/productList'
import ItemList from './ItemList'
import { getProductByCat } from '../../utils/customFetch'
import { useParams} from "react-router-dom"

function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoria} = useParams();

  useEffect(() => {
    if(!categoria){
      customFetch(0, productList)
      .then (r => {
        setItems(r)
      });
    }
    else{
      getProductByCat(categoria)
      .then (res => {
        setItems(res)
      });
    }
  }, [items, categoria])

  if (items.length > 0)

  return (
    <div className='cardList'>
      <ItemList productList={items}/>
    </div>
    
  )
}

export default ItemListContainer