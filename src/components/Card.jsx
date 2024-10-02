import { Link, useLocation} from "react-router-dom";
import showConfirmationDialog from "../Auth/generalComponents/sweetAlert";
import {deleteItem} from '../utils/productEndPoints'
import Edition from "../Auth/generalComponents/Edition/Edition";

const Card = ({ item, subParam }) => {
  const location = useLocation()
  const isAdminRoute = location.pathname.includes("admin");

  const delItem = async()=>{
    const confirmed = await showConfirmationDialog(
      "¿Quiere eliminar este item?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      await deleteItem(item.id);
      
    }
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={item.img} alt="Card image" />
        <div className="card-body">
          <p className="card-text">{item.text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link className="btn btn-sm btn-outline-secondary me-3" to={`${subParam}/${item.id}`}>
                Ver mas
              </Link>
              {isAdminRoute?
              <Edition 
                  allowedRoles={["Super Admin", "Admin"]}
                  onClick={delItem}
                  text={"Borrar"}
                  className="btn btn-sm btn-outline-danger"/>
                  :false}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//`/detalle/item/${item.id}`