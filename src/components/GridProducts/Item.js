import React from 'react'
import Envio from '../../assets/icons/envioW.png'
import { Link } from 'react-router-dom'

function Item({id, image, titulo, precio, desc, condicion1, precio2}) {
  return (
    <section key={id}>
    <div className='card'>
        <div>
        <img className='card__image' src={image} alt={titulo}/>
        <h3 className='card__titulo'>{titulo}</h3>
        </div>
        <div className='cardAhorro'>
        <p className='cardAhorro__precio'>${precio}</p>
        <p className='cardAhorro__desc'>{desc}</p>
        </div>
        <div>
        <p className='card__condicion'>{condicion1}</p>
        <p className='card__precio2'>${precio2}</p>
        </div>
        <div>
          <Link className='cardBtn' to={`/producto/${id}`}>Ver detalle</Link>
        </div>
        <div className='card__compra'>
          <div className='card__envio'>
          <img className='card__envioIcon' src={Envio} alt="" />
          <p className='txt12l card__envioText'>ENVIO GRATIS</p>
          </div>
          <p className='texto16'>COMPRA AHORA</p>
        </div>
        
    </div>
</section>
  )
}

export default Item