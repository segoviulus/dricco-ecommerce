import React from 'react'
import IconCart from '../../assets/icons/IconCartW.png'
import { Link } from 'react-router-dom'
import { CartContext  } from '../Context/CartContex'
import { useContext } from 'react'

function CartWidget () {
  const {addItemNavBar} = useContext (CartContext)
  return (
        <div className='cart__menu'>
          <img className='header__icon' src={IconCart} alt="" />
          <p className='cart__quantity'>{addItemNavBar()}</p>
          <Link to={`/cart`}>
          <h3 className='cart__txt'>Mi Carrito</h3>
          </Link>
        </div>
  )
       }

export default CartWidget;
