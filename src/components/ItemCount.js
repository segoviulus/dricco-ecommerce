import React from 'react';
import {useState} from 'react';
import Swal from "sweetalert2"

    const ItemCount = ({stock, initial, onAdd}) => {
    const resultado = useState(initial); //(valor inicial, en este caso cero)

    const contador = resultado[0];

    const setContador = resultado[1]; // const [contador,setContador] = useState(0); esta es la forma destructurada

    const aumentar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      } else {
        Swal.fire({
          title: 'Lo sentimos',
          text: 'El stock maximo de este producto es de ' + stock,
          icon: 'error'
        })
      }
    }

    const disminuir = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
    }


  return (
    <section>
      <section className='cardContador'>
    <button className='cardContador__btn' onClick={disminuir}>-</button>
    <p className='cardContador__stock'>{contador}</p>
    <button className='cardContador__btn' onClick={aumentar}>+</button>
    <div>
    <button className='cardBtn' onClick={onAdd}>Agregar al carrito</button>
    </div>
    </section>
    </section>
    
  
    
    
);
  }

export default ItemCount;