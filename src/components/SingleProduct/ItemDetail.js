import React from 'react'
import ItemCount from './ItemCount'
import Envio from '../../assets/icons/envioW.png'
import Categoria from '../../assets/icons/categoriaD.png'
import { Link } from 'react-router-dom'

function ItemDetail ({id, image, categoria, titulo, descripcion, precio, desc, condicion1, condicion2, condicion3, precio2, stock}) {
  return (
    <section key={id}>
      <div className='singlecard'>
        <div>
          <img className='singlecard__image' src={image} alt={titulo}/>
        </div>
        <div className='singlecard__info'>
          <div className='singlecard__cat'>
            <img  className='singlecard__icon15' src={Categoria} alt="" />
            <Link className='txt12h' to={`/categoria/${categoria}`}>{categoria}</Link>
          </div>
          <div>
            <h3 className='singlecard__titulo'>{titulo}</h3>
            <h5 className='txt14d'>{descripcion}</h5>
          </div>
          <div className='singlecard__card'>
            <div className='singlecard__precios'>
              <div>
                <div>
                  <p className='singlecard__etiq'>{condicion1} - {condicion2} - {condicion3}</p>
                </div>
              </div>
              <div>
              <div className='cardAhorro'>
                <p className='cardAhorro__precio'>${precio}</p>
                <p className='cardAhorro__desc'>{desc}</p>
              </div>
              <div>
                <p className='singlecard__precio2'>${precio2}</p>
              </div>
              </div>
            </div>
              <div className='singlecard__compra'>
                <div className='singlecard__envio'>
                  <img className='singlecard__icon20' src={Envio} alt="" />
                  <p className='txt12l singlecard__envioText'>ENVIO GRATIS</p>
                </div>
                <p className='texto16'>COMPRA AHORA</p>
              </div>
        </div>
        <div>
          <ItemCount stock={stock} onAdd={()=>{}} initial= {1}/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail