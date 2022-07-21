import React from 'react'
import {Link} from 'react-router-dom'

function Categorias() {
  return (
<section className='header__menuCat'>
        <Link className='header__link' to="categoria/tv">Tv</Link>
        <Link className='header__link' to="categoria/airesplit">Aire Split</Link>
        <Link className='header__link' to="categoria/celular">Celulares</Link>
        <Link className='header__link' to="categoria/calefaccion">Calefacción</Link>
</section>
  )
}

export default Categorias;

