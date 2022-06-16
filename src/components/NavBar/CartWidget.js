import React from 'react'
import IconCart from '../../assets/icons/IconCartW.png'
import IconSuc from '../../assets/icons/sucursalW.png'

const CartWidget = () => {
  return (
    <nav className='cart__menu'>
      <img className='header__icon' src={IconCart} alt="" />
      <h3 className='txt14l'>Mi Carrito</h3>
      <img className='header__icon' src={IconSuc} alt="" />
      <h3 className='txt14l'>Sucursales</h3>
    </nav>
    
  )
}

export default CartWidget;