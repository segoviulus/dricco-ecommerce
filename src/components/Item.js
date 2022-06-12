import React from 'react'
import ItemCount from './ItemCount'
import Envio from '../assets/icons/envioW.png'

function Item({id, image, titulo, precio, desc, condicion, precio2, stock}) {
  return (
    <section key={id}>
    <div className='card'>
        <div>
        <img className='cardImage' src={image} alt={titulo}/>
        <h3 className='cardTitulo'>{titulo}</h3>
        </div>
        <div className='cardAhorro'>
        <p className='cardAhorro__precio'>${precio}</p>
        <p className='cardAhorro__desc'>{desc}</p>
        </div>
        <div>
        <p className='cardCondicion'>{condicion}</p>
        <p className='cardPrecio2'>${precio2}</p>
        </div>
        <div>
          <ItemCount stock={stock} onAdd={()=>{}} initial= {1}/>
        </div>
        <div className='cardCompra'>
          <div className='cardEnvio'>
          <img className='cardEnvio__icon' src={Envio} alt="" />
          <p className='texto12 cardEnvio__text'>ENVIO GRATIS</p>
          </div>
          <p className='texto16'>COMPRA AHORA</p>
        </div>
        
    </div>
</section>
  )
}

export default Item