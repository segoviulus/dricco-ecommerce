import React from 'react'
import Item from './Item'

function ItemList({productList}) {
return(
    productList.map(p => 
        <Item
        id={p.id}
        image={p.image}
        titulo={p.titulo}
        precio={p.precio}
        desc={p.desc}
        condicion1={p.condicion1}
        precio2={p.precio2}
        key={p.id}
        stock={p.stock}
        /> 
    )
  )
    }

export default ItemList