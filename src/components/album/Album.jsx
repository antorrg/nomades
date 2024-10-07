import { Link, useLocation, useNavigate } from "react-router-dom";
import showConfirmationDialog from '../../Auth/generalComponents/sweetAlert'
import Edition from "../../Auth/generalComponents/Edition/Edition";
import * as Cmt from "../IndexComponents";
import GenericButton from "../../Auth/generalComponents/GenericButton/GenericButton";

const Album = ({ info, items, param, subParam }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Verificar si la URL contiene "admin"
  const isAdminRoute = location.pathname.includes("admin");

  const toEdition = () => {
    navigate(`${param}/update/${info.id}`);
  };
  const itemCreate = () => {
    navigate(`/admin/product/item/create/${info.id}`);
  };
  const deleteProduct = async() => {
    const confirmed = await showConfirmationDialog(
      "¿Quiere eliminar este producto?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      //await deleteProduct(item.id);
      console.log('soy el producto a borrar: ',info.id)
      
    }
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Proyecto: {info?.title}</h1>
            <img
                  className="bd-placeholder-img-fluid"
                  src={info?.landing}
                  alt="Imagen"
                  style={{ maxWidth: "22rem" }}
                />
            {isAdminRoute ? (
              <>
                <h4>Meta informacion:</h4>
                <p className="lead text-muted">{info?.infoHeader}</p>
                <hr></hr>
                <h4>Descripcion:</h4>
              </>
            ) : null}
            <p className="lead text-muted">{info?.infoBody}</p>
            <Link className="btn btn-secondary my-2" to={param}>
              Volver
            </Link>
            {isAdminRoute ? (
              <>
                <Edition
                  allowedRoles={["Super Admin", "Admin"]}
                  onClick={toEdition}
                  text={"Editar"}
                  className="btn btn-primary my-2 ms-2"
                />
                <Edition
                  allowedRoles={["Super Admin", "Admin"]}
                  onClick={itemCreate}
                  text={"Crear Item"}
                  className="btn btn-outline-success my-2 ms-2"
                />
                <GenericButton
                  className="btn btn-outline-danger my-2 ms-2"
                  buttonText={"Eliminar producto"}
                  onClick={deleteProduct }
                />
              </>
            ) : (
              false
            )}
          </div>
        </div>
      </section>
      <section className="album.py-5.bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {items?.map((item) => (
              <Cmt.Card item={item} key={item.id} subParam={subParam} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;
