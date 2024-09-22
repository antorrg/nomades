import React from 'react'

const ProductComp = () => {
  
   
  return (
    <div>
    <div className='container marketing'>
      <div className='row'>
        {products?.map((info)=>
        <div className='col-lg-4' key={info.id}>
          <img className='bd-placeholder-img-fluid'  src={info?.landing} alt='Imagen' style={{maxWidth:'20rem'}}/>
          <h2 className='fw-normal'>{info.title}</h2>
          <p>{info?.infoHeader}</p>
          <p><Link className='btn btn-secondary' to={`/detalle/${info?.id}`}>Ver detalles</Link></p>
        </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default ProductComp