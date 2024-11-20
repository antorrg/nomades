import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {getWorks} from '../../../redux/actions'


const AdminAlbumWork = () => {
    const dispatch = useDispatch();
    const featurettes = useSelector((state) => state.Works);
    const isAdmin = true
    
    useEffect(()=>{
      dispatch(getWorks(isAdmin))
    },[])
  

  return (
        <>
        <section className="album py-5 bg-light mb-3">
        <div className="container">
        <div className="col-lg-6 col-md-8 mx-auto text-center">
        <h2 className="fw-light">Nuestro trabajo</h2>
        <Link className="btn btn-sm btn-outline-success mb-2">Crear Item</Link>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {featurettes?.map((work) => (
                <div className="col" key={work.id}>
                <div className="card shadow-sm">
                <img className="card-img-top" src={work.image} alt="Card image" />
                <div className="card-body">
                    <p className="card-text">{work.title}</p>
                    <hr></hr>
                    <p className="card-text text-truncate">{work.text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Link className="btn btn-sm btn-outline-danger me-3" to={'/'}>
                        Eliminar
                        </Link>
                        <Link className="btn btn-sm btn-outline-primary me-3" to={`/admin/work/update/${work.id}`}>
                        Editar
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        </section>
        </>
  )
}

export default AdminAlbumWork
