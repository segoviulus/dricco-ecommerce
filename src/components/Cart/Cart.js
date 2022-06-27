import React from 'react'
import { useContext } from 'react'
import { CartContext  } from '../Context/CartContex'

function Cart() {

  const {cartItems} = useContext(CartContext)
  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id}> 
        <p className='text14d'>{product.titulo}</p>
        </div>
      )
      
      )}

    </div>
  )
}

export default Cart