import React from 'react'

function CountItem() {
    const resultado = useState(0); //(valor inicial, en este caso cero)
    const contador = resultado[0];
    const setContador = resultado[1];
    // const [contador,setContador] = useState(0); esta es la forma destructurada
    const aumentar = () => {
        setContador(contador + 1);
    }
    const disminuir = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
    }
  return (
    <>
    <p>El contador va: {contador}</p>
    <button onClick={aumentar}>+</button>
    <button onClick={disminuir}>-</button>
    </>
    
  )
}

export default CountItem