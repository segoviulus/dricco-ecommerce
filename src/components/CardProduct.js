import React from 'react'
import ImgP from '../assets/images/products/tv-noblex-32-dk32x5000-smart-hd122-17111.avif';
function CardProduct() {
  return (
    <section>
        <div>
            <div>
            <img src={ImgP} alt="" />
            <h3 className='cardTitulo'>Tv Noblex 32" Dk 32x5000 Smart Hd1/22</h3>
            </div>
            <div className='cardAhorro'>
            <p className='cardAhorro__precio'>$59.599</p>
            <p className='cardAhorro__desc'>46% OFF</p>
            </div>
            <div>
            <p className='cardCondicion'>Contado</p>
            <p className='cardPrecio2'>$31.999</p>
            </div>
            
        </div>
    </section>
  )
}

export default CardProduct