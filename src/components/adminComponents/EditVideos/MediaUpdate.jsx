import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMediaById, cleanState } from "../../../redux/actions";
import showConfirmationDialog from "../../../Auth/generalComponents/sweetAlert";
import InfoFormField from "../../../views/AdminViews/InfoFormField";
import * as val from "../../../utils/videoValidate";
import {updateMedia}from "../../../utils/landingPageEndpoints"

const MediaUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const videoType = queryParams.get("type"); // Obtener el tipo de video
  const id = location.pathname.split("/").pop(); // Obtener el ID de la URL

  const item1 = useSelector((state) => state.MediaById);

  const validator = {
    youtube: val.youtube,
    facebook: val.facebook,
    instagram: val.instagram,
  };

  const onClose = () => {
    navigate(-1);
  };

  const [item, setItem] = useState({
    title: "",
    url: "",
    type: videoType || "",
    text: "",
    enable: true,
  });

  const [error, setError] = useState({
    url: "",
  });

  // Petición para obtener los datos del elemento
  useEffect(() => {
    dispatch(getMediaById(id));
    return () => {
      dispatch(cleanState());
    };
  }, [id]);

  // Cargar los datos en el formulario
  useEffect(() => {
    if (item1) {
      setItem({
        title: item1.title || "",
        url: item1.url || "",
        type: videoType,
        text: item1.text || "",
        enable: item1.enable || true,
      });
    }
  }, [item1]);

  // Manejar cambios en los campos del formulario
  const handleItemChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));

    if (name === "url") {
      const validate = validator[videoType]; // Obtener el validador adecuado
      const errors = validate({ ...item, [name]: value });
      setError((prevError) => ({ ...prevError, url: errors.url || "" }));
    }
  };

  // Manejar cambios en el interruptor de activación
  const handleSwitchChange = (e) => {
    const { checked, id } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [id]: checked,
    }));
  };

  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de actualizar el item?"
    );
    if (confirmed) {
      // Aquí iría la lógica para actualizar el elemento
      console.log("Elemento actualizado:", item);
       await updateMedia(id, item, onClose)
    }
  };

  const permit =
    !item.url.trim() ||
    !item.title.trim() ||
    !item.text.trim() ||
    error.url;

  return (
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
          <div className="container mt-5">
            <h3>Modificar video de {videoType}:</h3>
            <form className="needs-validation" id="createForm" noValidate>
              <div className="mb-3">
                <label htmlFor="url" className="form-label">
                  Url de {videoType}:
                </label>
                <div className="d-flex flex-row me-3">
                  <input
                    className="form-control"
                    id="url"
                    name="url"
                    value={item.url}
                    onChange={handleItemChange}
                  />
                  <InfoFormField
                    place={"left"}
                    action={"hover"}
                    info={`Copie y pegue aquí la URL de ${videoType} que desea guardar`}
                  />
                </div>
                {error.url && <p className="errorMsg">{error.url}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Título:
                </label>
                <input
                  className="form-control"
                  id="title"
                  name="title"
                  value={item.title}
                  onChange={handleItemChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  Descripción:
                </label>
                <textarea
                  className="form-control"
                  id="text"
                  name="text"
                  rows="3"
                  value={item.text}
                  onChange={handleItemChange}
                />
              </div>
              <div className="mb-3 form-check form-switch">
                <Form.Check
                  type="switch"
                  id="enable"
                  checked={item.enable}
                  label="Desactive para cambiar de estado"
                  onChange={handleSwitchChange}
                />
              </div>
              <div className="d-flex flex-row me-3">
                <button
                  className="btn btn-md btn-primary mb-3 me-2"
                  type="button"
                  onClick={handleSubmit}
                  disabled={permit}
                >
                  Actualizar
                </button>
                <button
                  className="btn btn-md btn-secondary mb-3 me-2"
                  type="button"
                  onClick={onClose}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaUpdate;

// import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import {useNavigate, useLocation } from "react-router-dom";
// import {useDispatch, useSelector } from 'react-redux'
// import {getMediaById, cleanState} from '../../../redux/actions'
// import showConfirmationDialog from "../../../Auth/generalComponents/sweetAlert";
// import InfoFormField from "../../../views/AdminViews/InfoFormField";
// import * as val from '../../../utils/videoValidate'


// const MediaUpdate = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate();
//   const location = useLocation();

//   const queryParams = new URLSearchParams(location.search);
//   const videoType = queryParams.get("type"); //Obtener el type
//   const id = location.pathname.split("/").pop(); // Obtener el ID de la URL

//   const item1 = useSelector((state) => state.MediaById);

//   const validator = {
//       youtube: val.youtube,
//       facebook: val.facebook,
//       instagram: val.instagram,
//     };
//   console.log(videoType)
  
//   const itemOnClose = () => {
//     navigate(-1);
//   };

//   const [item, setItem] = useState({
//     title: "",
//     url: "",
//     type: `${videoType}`,
//     description: "",
//     enable: true,
//   });
//   const [error, setError] = useState({
//     url: "",
//   });

//   //peticion a actions
//   useEffect(() => {
//     dispatch(getMediaById(id));
//     return ()=>{
//       dispatch(cleanState())
//     }
//   }, [id]);
  

//   useEffect(() => {
//       if (item1) {
//         setItem({
//           title: item1.title || "",
//           url: item1.url || "",
//           type: `${videoType}`,
//           description: item1.description || "",
//           enable: item1.enable || true,
//         });
//       }
//     }, [item1]);
  

//   const handleItemChange = (event) => {
//     const { name, value } = event.target;
//     setItem((prevItem) => ({ ...prevItem, [name]: value }));
//      // Validar solo la URL
//   if (name === "url") {
//   const validate = validator[videoType]; // Obtener el validador adecuado
//   const errors = validate({ ...item, [name]: value });
//   setError(errors);
//    }
//   };
//   const handleSwitchChange = (e) => {
//       const { checked, id } = e.target;
//       setItem((prevItem) => ({
//         ...prevItem,
//         [id]: checked,
//       }));
//     };

//   const handleSubmit = async (e) => {
//     const confirmed = await showConfirmationDialog(
//       "¿Está seguro de actualizar el item?"
//     );
//     if (confirmed) {
//       // Aquí iría la lógica para crear el producto
//       //await createItem(item, itemOnClose);
//       console.log('soy el item actualizado: ',item);
//     }
//   };
//   const permit = (!item.url.trim() ||!item.title.trim() || !item.description.trim() || error.url)? true : false;
// return (
//   <div className="imageBack">
//   <div className="coverBack">
//     <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
//       <div className="container mt-5">
//         <h3>Modificar video de {videoType}: </h3>
//         <section className="needs-validation" id="createForm" noValidate>
//           <div className="mb-3">
//           <label htmlFor="url" className="form-label">
//               Url de {videoType}:
//             </label>
//             <div className="d-flex flex-row me-3">
//             <input
//               className="form-control"
//               id="url"
//               name="url"
//               value={item.url}
//               onChange={handleItemChange}
  
//             />
//             <InfoFormField place={'left'} action={'hover'} info={`Copie y pegue aquí la url de ${videoType} que desea guardar`}/>
//             </div>
//             {error.url && <p className='errorMsg'>{error.url}</p>}
//           </div> <div className="mb-3">
//             <label htmlFor="title" className="form-label">
//               Titulo:
//             </label>
//             <input
//               className="form-control"
//               id="title"
//               name="title"
//               value={item.title}
//               onChange={handleItemChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">
//               Descripción:
//             </label>
//             <textarea
//               className="form-control"
//               id="description"
//               name="description"
//               rows="3"
//               value={item.description}
//               onChange={handleItemChange}
//               required
//             />
//           </div>
//           <div className="mb-3 form-check form-switch">
//                   <Form.Check 
//                     type="switch"
//                     id="enable"
//                     checked={item.enable}
//                     label="Desactive si no quiere mostrar ahora"
//                     onChange={handleSwitchChange}
//                   />
//               </div>
         
//           <div className="d-flex flex-row me-3">
//           <button
//               className="btn btn-md btn-primary mb-3 me-2"
//               type="button"
//               onClick={handleSubmit}
//               disabled={permit}
//             >Crear</button>
//             <button
//               className="btn btn-md btn-secondary mb-3 me-2"
//               onClick={itemOnClose}
//             >Cancelar</button>
//           </div>
//         </section>
//       </div>
//     </div>
//   </div>
// </div>
// )
// }

// export default MediaUpdate