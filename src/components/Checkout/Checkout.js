import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContex'
import Form from '../form/Form'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase'


function Checkout() {
    const {cartItems, obtenerTotal, clear} = useContext(CartContext)
    const [data, setData] = useState({name:"", lastname:"",email:"", phone:""}) // Es lo mismo que declararlo con tantas const como datos del formulario const [tel, setTel] = useState("")
    const [orderId, setOrderID] = useState('')
    const handleChange = (e) => {
      setData(
        {
        ...data,
        [e.target.name]: e.target.value
      }
      )
    }
  
    const handleSubmit = (e) => {

      // Formatear el carrito para que no llegue el dato de la img
      const pedidoCliente = cartItems.map((prod) => {
        return {
          id: prod.id,
          titulo: prod.titulo,
          quantity: prod.quantity,
          precio: prod.precio2,
        }
      })

      e.preventDefault();
      const objOrden ={
        buyer:{
          name: data.name,
          lastname: data.lastname,
          phone: data.phone,
          email: data.email,
          emailConfirm: data.emailConfirm,
        },
        pedidoCliente, //pedidoCliente lo puedo llamar asi o como lo hice en obtenerTotal
        total: obtenerTotal(),
        date: serverTimestamp(), // new Date(), es la fecha en mi PC. Lo debe manejar el servidor en este caso Firebase
      };

      const ref = collection(db, 'orders');
      addDoc(ref, objOrden)
      .then((response) => {
        setOrderID(response.id)
        clear()
      });

    }

    if (orderId !== '') {
      return (
        <div>
          <h3 className='titulo22'>Gracias por tu compra</h3>
          <p className='txt16dc'>Tu orden es: {orderId}</p>
        </div>
      )
    }



  return (
    <Form
        handleChange={handleChange}
        data={data}
        handleSubmit={handleSubmit}
    
    />
  )
}

export default Checkout