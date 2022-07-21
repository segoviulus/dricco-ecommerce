import React from 'react'

const Form =({handleChange, data, handleSubmit})=>{
    return (
        <div>
            <form  className='form' onSubmit={handleSubmit}>
                <p className='titulo22' >Detalle de Facturación</p>
                <input className='form__placeText'
                    placeholder="Nombre/s"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    required
                />
                <input className='form__placeText'
                    placeholder="Apellido"
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    value={data.lastname}
                    required
                />
                <input className='form__placeText'
                    placeholder="Telefono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                />
                <input className='form__placeText'
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                />
                <input className='form__placeText'
                    placeholder="Confirmar E-mail"
                    type="email"
                    name="emailConfirm"
                    onChange={handleChange}
                    value={data.emailConfirm}
                    required
                />
                
                <button disabled={data.email !== data.emailConfirm} className='form__btn'>Realizar el pedido</button>
                
            </form>
        </div>
    )
}

export default Form