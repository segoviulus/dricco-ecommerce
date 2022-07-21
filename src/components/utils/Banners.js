import React from 'react'

function Banners() {
  return (
    <section className='banner'>
      <section  className='banner__style'>
        <div>
          <img src="/images/icons/30dias.png" alt="30dias" />
        </div>
        <div className='banner__txt'>
          <h5 className='txt16v'>Garantia de Calidad!</h5>
          <p className='txt12d'>30 dias de cambio directo por falla o defectos</p>
        </div>
      </section>
      <section className='banner__style'>
        <div>
          <img src="/images/icons/retiro.png" alt="30dias" />
        </div>
        <div className='banner__txt'>
          <h5 className='txt16v'>Retiro inmediato!</h5>
          <p className='txt12d'>Elegi tu sucursal mas cercana</p>
        </div>
      </section>
      <section className='banner__style'>
        <div>
          <img src="/images/icons/enviob.png" alt="30dias" />
        </div>
        <div className='banner__txt'>
          <h5 className='txt16v'>Envio GRATIS!</h5>
          <p className='txt12d'>Compra sin moverte de tu casa</p>
        </div>
      </section>
    </section>
    
  )
}

export default Banners