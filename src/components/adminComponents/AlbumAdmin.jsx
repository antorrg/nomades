import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showConfirmationDialog from "../../Endpoints/sweetAlert";
import Edition from "../generalComponents/Edition/Edition";
import GenericButton from "../generalComponents/GenericButton/GenericButton";
import { booleanState } from "../../utils/generalHelpers";
import Loading from "../Loading";
import { deleteProduct, deleteItem } from "../../Endpoints/endpoints";

const Album = ({ info, items }) => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const onClose = () => {
    setLoad(false);
    navigate("/admin?tab=producto");
  };

  const toEdition = () => {
    navigate(`/admin/product/update/${info.id}`);
  };
  const itemCreate = () => {
    navigate(`/admin/product/item/create/${info.id}`);
  };
  const deleteCurrentProduct = async () => {
    const confirmed = await showConfirmationDialog(
      "¿Quiere eliminar este producto?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      await deleteProduct(info.id, onClose);
      //console.log('soy el producto a borrar: ',info.id)
      setLoad(true);
    }
  };
  const delItem = async (id) => {
    const confirmed = await showConfirmationDialog(
      "¿Quiere eliminar este item?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      await deleteItem(id, onClose);
      setLoad(true);
      //console.log('soy el item a borrar: ',id)
    }
  };

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Proyecto: {info?.title}</h1>
                <img
                  className={`bd-placeholder-img-fluid ${info && !info.enable ? 'deactivate' : ''}`}
                  src={info?.landing}
                  alt="Imagen"
                  style={{ maxWidth: "22rem" }}
                />
                <h4>Info posicionamiento:</h4>
                <p className="lead text-muted">{info?.infoHeader}</p>
                <hr></hr>
                <h4>Descripcion:</h4>
                <p className="lead text-muted">{info?.infoBody}</p>
                <hr></hr>
                <h4>Estado:</h4>
                <p className="lead text-muted">{booleanState(info?.enable)}</p>
                <button
                  className="btn btn-sm btn-secondary my-2"
                  onClick={() => navigate("/admin?tab=producto")}
                >
                  Volver
                </button>
                <button
                  className="btn btn-sm btn-primary my-2 ms-2"
                  onClick={toEdition}
                >
                  Editar
                </button>
                 <button
                  className="btn btn-sm btn-outline-success my-2 ms-2"
                  onClick={itemCreate}
                >
                  Crear Item
                </button>
                 <button
                  className="btn btn-sm btn-outline-danger my-2 ms-2"
                  onClick={deleteCurrentProduct}
                >
                  Eliminar producto
                </button>
              </div>
            </div>
          </section>
          <section className="album.py-5.bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {items?.map((item) => (
                  <div className="col" key={item.id}>
                    <div className="card shadow-sm">
                      <img
                        className={`card-img-top ${!item.enable ? 'deactivate' : ''}`}
                        src={item.img}
                        alt="Card image"
                      />
                      <div className="card-body">
                        <p className="card-text">{item.text}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              className="btn btn-sm btn-outline-secondary me-3"
                              onClick={() =>
                                navigate(`/admin/product/item/${item.id}`)
                              }
                              disabled={item.id === 0 ? true : false}
                            >
                              Ver mas
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => {
                                delItem(item.id);
                              }}
                              disabled={item.id === 0 ? true : false}
                            >
                              Borrar
                            </button>
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
      )}
    </>
  );
};

export default Album;
