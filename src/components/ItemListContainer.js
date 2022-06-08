import React from 'react'
import Product from './Product'


function ItemListContainer(props) {
  return (
    <>
    <p className='titulo32'>{props.hero}</p>
    <Product
    titulo='Tv Noblex 32" Dk 32x5000 Smart Hd1/22'
    precio={59.599}
    desc='46% OFF'
    condicion='Contado'
    precio2={39.599}
    />
    </>
    
  )
}

export default ItemListContainer