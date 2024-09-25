import {Link, useLocation} from 'react-router-dom'
import Edition from '../Auth/userComponents/Edition/Edition'
import * as Cmt from './IndexComponents'

const Album = ({info, items, param, subParam}) => {
  const location = useLocation()
   // Verificar si la URL contiene "admin"
   const isAdminRoute = location.pathname.includes('admin');


  return (
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Proyecto: {info?.title}</h1>
            {isAdminRoute ?
              <>
              <h4>Meta informacion:</h4>
              <p className="lead text-muted">{info?.infoHeader}</p>
              <img className='bd-placeholder-img-fluid'  src={info?.landing} alt='Imagen' style={{maxWidth:'22rem'}}/>
              <hr></hr>
              <h4>Descripcion:</h4>
              </>: null
            }
            <p className="lead text-muted">{info?.infoBody}</p>
            <Link className="btn btn-secondary my-2" to={param}>
              Volver
            </Link>
            {isAdminRoute ?
            <Edition allowedRoles={['Super Admin', 'Admin']} onClick={()=>{alert('Soy edicion')}} text={'Editar'} className='btn btn-primary my-2 ms-2'/>
            : false}
          </div>
        </div>
      </section>
      <section className="album.py-5.bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {items?.map((item) => (
              <Cmt.Card item={item} key={item.id} subParam={subParam}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Album



//Separamos la query del params y hacemos dos variables:
// const queryParams = new URLSearchParams(location.search);
// const type = queryParams.get("type"); //Obtener el type "user" o "car"
// const id = location.pathname.split("/").pop(); // Obtener el ID de la URL
//console.log(id)