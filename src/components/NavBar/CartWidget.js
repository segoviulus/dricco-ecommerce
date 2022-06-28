import React from 'react'
import IconCart from '../../assets/icons/IconCartW.png'
import { Link } from 'react-router-dom'

function CartWidget () {
  return (
        <div className='cart__menu'>
          <img className='header__icon' src={IconCart} alt="" />
          <p className='cart__quantity'>0</p>
          <Link to={`/cart`}>
          <h3 className='cart__txt'>Mi Carrito</h3>
          </Link>
        </div>
  )
       }

export default CartWidget;
