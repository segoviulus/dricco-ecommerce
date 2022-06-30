import React from 'react'
import { useContext } from 'react'
import { CartContext  } from '../Context/CartContex'
import IconTrash from '../../assets/icons/trash.png'
import {Link} from 'react-router-dom'

function Cart() {
  const {cartItems, removeItem, clear, obtenerSubtotal, obtenerTotal, addItemNavBar} = useContext(CartContext)
  return (
    <div>
        {addItemNavBar () === 0 ? (
        <div className='page'>
          <div className='page__in page__center'>
            <h2 className='titulo22'>No hay elementos en tu carrito</h2>
            <Link to='/' className='cart__btn'>Ir a la tienda</Link>
          </div>
       </div>


) : (

      <div className='page'>
 
         <div className='page__in'>
 
           <div className='cart'>
             <h2 className='titulo32'>Mi Carrito</h2>
           </div>
 
           <div className='cart__table'>
             <div className='cart__table__row'>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>Producto</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'></p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>Precio</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>Cantidad</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>Subtotal</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'></p>
               </div>      
             </div>
           </div>
 
           <div>
             {cartItems.map((product) => (
             <div key={product.id} className='cart__table__row'>
               <div className='cart__table__row__col'>
                 <img className='cart__img' src={product.image} alt="" />
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>{product.titulo}</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>${product.precio2}</p>
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>{product.quantity}</p>     
               </div>
               <div className='cart__table__row__col'>
                 <p className='txt16d'>${obtenerSubtotal(product.precio2, product.quantity )}</p>     
               </div>
               <div className='cart__table__row__col'>
                 <img src={IconTrash} alt="" className='cart__icon' onClick={() => removeItem(product.id)}/>
               </div>
             </div>
             ))}
           </div>
 
           <div className='cart__clear'>
           <button className='cart__btn' onClick={clear}>Vaciar Carrito</button>
           <Link to='/' className='cardBtn'>Seguir comprando</Link>
           </div>
 
           <div>
             <div className='page__flex page__flex__end'>
               <p className='cart__items'>Cantidad de items:</p>
               <p className='cart__items'>{addItemNavBar()}</p>
             </div>
             <div className='page__flex page__flex__end'>
               <p className='cart__total'>TOTAL:</p>
               <p className='cart__total'>$ {obtenerTotal()}</p>          
             </div>
 
           
           
           
           </div>   
           
 
         </div>
       </div>
 )       }


    </div>

    
     
  
  )}


 
export default Cart