import {useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Edition from "../../generalComponents/Edition/Edition";
import {userResetPass} from "../../../Endpoints/endpoints";
import showConfirmationDialog from "../../../Endpoints/sweetAlert";
import Loading from "../../Loading";

const User = ({ user, isSingleUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfileRoute = location.pathname.includes("profile");
  const [load, setLoad] = useState(false)

  const goToDetail = () => navigate(`/admin/users/${user.id}`);
  const goToBack = () => navigate(-1);
  const goToEdition = () => navigate(`/admin/users/update/${user.id}`);
  const goToUpgrade = () => navigate(`/admin/users/upgrade/${user.id}`);

  const onClose = () => {
    setLoad(false)
    navigate("/admin")
  };
  const onRetry = ()=>{
    setTimeout(()=>{
      onClose()
    },3000)
  }
  
 
  const goToPassUpd = () => {
    if (isProfileRoute) {
      navigate(`/admin/users/updateinfo/${user.id}`);
    } else {
      resetPassword();
    }
  };
  const resetPassword = async () => {
    const confirmed = await showConfirmationDialog(
      "¿Quiere reiniciar su contraseña?"
    );
    if (confirmed) {
      userResetPass(user.id, onClose, onRetry);
      setLoad(true)
    }
  };

  const userDelete = async () => {
    const confirmed = await showConfirmationDialog(
      "¿Quiere eliminar su usuario? \n¡Esta accion no podra deshacerse!"
    );
    if (confirmed) {
      userDelete(user.id, onClose);
      setLoad(true)
    }
  };
  const userStatus = user.enable ? "Activo" : "Bloqueado";

  const renderUserInfo = (label, value) => (
    <div className="user-info">
      <dt className="user-info-label">{label}:</dt>
      <dd className="user-info-value">{value}</dd>
    </div>
  );

  return (
    <div className="col userStyle">
      {load?
      <Loading/>: null}
      <div className="card shadow-sm p-2">
        <img
          className={`card-img-top ${user && !user.enable ? 'deactivate' : ''}`}
          src={user.picture}
          alt={`${user.nickname}'s profile`}
        />
        <div className="card-body">
          <dl className="user-info-list">
            {renderUserInfo("Email", user.email)}
            {renderUserInfo("Apodo", user.nickname)}
            {renderUserInfo("Rol", user.role)}
            {isSingleUser && (
              <>
                {renderUserInfo("Nombre", user.given_name)}
                {renderUserInfo("País", user.country)}
                {renderUserInfo("Estado", userStatus)}
              </>
            )}
          </dl>

          <div className="d-flex justify-content-between align-items-center">
            {isSingleUser ? (
              <div className='userButtons'>
                <button
                  className="btn btn-sm btn-outline-success me-2 mb-2 fixed-btn"
                  onClick={goToBack}
                  title="Volver"
                >
                  Volver
                </button>
                <Edition
                  allowedRoles={["Super Admin", "Administrador"]}
                  className="btn btn-sm btn-outline-success me-2 mb-2 fixed-btn"
                  userEditId={user.id}
                  text={isProfileRoute ? "Contraseña" : "Reset Contraseña"}
                  onClick={goToPassUpd}
                />
                {!isProfileRoute && (
                  <Edition
                    allowedRoles={["Super Admin", "Administrador"]}
                    className="btn btn-sm btn-outline-danger me-2 mb-2 fixed-btn"
                    text="Rol-Bloquear"
                    onClick={goToUpgrade}
                  />
                )}
                 <Edition
                    allowedRoles={["Super Admin", "Administrador"]}
                    userEditId={user.id}
                    className="btn btn-sm btn-outline-primary me-2 mb-2 fixed-btn"
                    text="Editar"
                    onClick={goToEdition}
                    isDualCondition={true}
                 />
              </div>
            ) : (
              <>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={goToDetail}
                >
                  Detalles
                </button>
                 <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={userDelete}
                >
                  Eliminar
                </button>
                <Edition
                  allowedRoles={["Super Admin", "Administrador"]}
                  className="btn btn-sm btn-outline-danger"
                  text="Eliminar"
                  onClick={userDelete}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
