/* import React from 'react'
import ImgP from '../assets/images/products/tv-noblex-32-dk32x5000-smart-hd122-17111.avif';
import Envio from '../assets/icons/envioW.png';
import ItemCount from '../ItemCount'

function Product(props) {
  return (
    <section>
        <div className='card'>
            <div>
            <img src={ImgP}/>
            <h3 className='cardTitulo'>{props.titulo}</h3>
            </div>
            <div className='cardAhorro'>
            <p className='cardAhorro__precio'>${props.precio}</p>
            <p className='cardAhorro__desc'>{props.desc}</p>
            </div>
            <div>
            <p className='cardCondicion'>{props.condicion}</p>
            <p className='cardPrecio2'>${props.precio2}</p>
            </div>
            <div>
              <ItemCount stock={5} onAdd={()=>{}} initial= {1}/>
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


export default Product
*/