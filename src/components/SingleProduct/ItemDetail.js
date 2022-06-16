import React from 'react'
import ItemSingle from '../SingleProduct/ItemSingle'

    function ItemDetail({productList}) {
        return(
            productList.map(p => 
                <ItemSingle
                id={p.id}
                image={p.image}
                categoria={p.categoria}
                titulo={p.titulo}
                descripcion={p.descripcion}
                precio={p.precio}
                desc={p.desc}
                condicion1={p.condicion1}
                condicion2={p.condicion2}
                condicion3={p.condicion3}
                precio2={p.precio2}
                key={p.id}
                stock={p.stock}
                /> 
                
            )
          )
            }
        

export default ItemDetail