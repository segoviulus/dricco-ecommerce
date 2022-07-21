import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import Banners from '../utils/Banners'
import Envio from '../../assets/icons/envioW.png'
import Categoria from '../../assets/icons/categoriaD.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContex'


function ItemDetail ({id, image, categoria, titulo, descripcion, precio, desc, condicion1, condicion2, condicion3, precio2, stock}) {
  
  const[ocultarConfirmar, setocultarConfirmar] = useState(false)

  const { addItem } = useContext(CartContext)

  const addToCart = (quantity) => {
    addItem(id, image, titulo, precio2, quantity)
    setocultarConfirmar (true)
  }

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
                <p className='txt16l'>COMPRA AHORA</p>
              </div>
        </div>
        <div className='cardContador'>
          {ocultarConfirmar ?
          (<Link to={"/cart"} className='cardBtn'>Ir al carrito</Link>) :
          (<ItemCount stock={stock} onAdd={addToCart} initial= {0}/>)
          }
        </div>
        </div>
      </div>
      <div>
        <Banners/>
      </div>
      <div className='singlecard__descripcion'>
        <h4 className='txt16d'>Descripcion:</h4>
        <p className='txt14d'>{descripcion}</p>
      </div>
    </section>
  )
}

export default ItemDetail