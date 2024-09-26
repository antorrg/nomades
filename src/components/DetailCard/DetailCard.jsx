import {Link,useLocation, useNavigate} from 'react-router-dom'
import Edition from '../../Auth/userComponents/Edition/Edition'
import './DetailCard.css'

const DetailCard = ({item, param}) => {
  const navigate = useNavigate()
  const location = useLocation()
  // Verificar si la URL contiene "admin"
  const isAdminRoute = location.pathname.includes('admin');
  const route = isAdminRoute? `/${param}/${item?.ProductId}` : `/detalle/${item?.ProductId}`

  return (
    <div>
       <div className='modal modal-tour position-static d-block modal-custom py-5' tabindex="-1" role="dialog" id="modalTour">
      <div className='modal-dialog modal-dialog-centered modal-xl'>
        <div className='modal-content'>
          <div className='modal-body p-5 text-center'>
            <img className='d-block.mx-auto mb-4' src={item?.img} alt="image not found"/>
            <p className='text-muted'>{item?.text}</p>
            <Link className='btn btn-lg btn-primary mt-3 mx-auto w-50' to={route}>Cerrar</Link>
            {isAdminRoute ?
            <Edition allowedRoles={['Super Admin', 'Admin']} onClick={()=>{navigate(`/admin/product/item/update/${item.id}`)}} text={'Editar'} className={'btn btn-lg btn-primary mt-3 ms-2 mx-auto w-25'}/>
            : null}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailCard