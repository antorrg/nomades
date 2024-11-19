import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import GenericButton from "../../../../Auth/generalComponents/GenericButton/GenericButton";
import showConfirmationDialog from "../../../../Auth/generalComponents/sweetAlert";
import ImageUploader from "../../../../utils/ImageUploader";
import { createItem } from "../../../../utils/productEndPoints";
//import "./productstyle.css";



const CreateLanding = () => {
 
  const navigate = useNavigate();
  const itemOnClose = () => {
    navigate(-1);
  };

  const [item, setItem] = useState({
    title: "",
    image: "",
    info_header: "",
    description: "",
    
  });

  const handleItemImageChange = (url) => {
    setItem((prevItem) => ({ ...prevItem, img: url }));
  };

  const handleItemChange = (event) => {
    const { name, value } = event.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = async (e) => {
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de crear el item?"
    );
    if (confirmed) {
      // Aquí iría la lógica para crear el producto
      //await createItem(item, itemOnClose);
      console.log('soy el nuevo item: ',item);
    }
  };

  return (
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
          <div className="container mt-5">
            <h3>Creación de Item: </h3>
            <section className="needs-validation" id="updateForm" noValidate>
              <div className="col-md-6 mb-3">
                <ImageUploader
                  titleField="Imagen:"
                  imageValue={item.image}
                  onImageUpload={handleItemImageChange}
                />
              </div> <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Titulo:
                </label>
                <input
                  className="form-control"
                  id="title"
                  name="title"
                  value={item.title}
                  onChange={handleItemChange}
                  required
                />
              </div> <div className="mb-3">
                <label htmlFor="info_header" className="form-label">
                  Info posicionamiento:
                </label>
                <textarea
                  className="form-control"
                  id="info_header"
                  name="info_header"
                  rows="3"
                  value={item.info_header}
                  onChange={handleItemChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción:
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  value={item.description}
                  onChange={handleItemChange}
                  required
                />
              </div>
             
              <div className="d-flex flex-row me-3">
              <GenericButton
                  className="btn btn-primary mb-3 me-2"
                  type="button"
                  onClick={handleSubmit}
                  buttonText="Crear"
                />
                <GenericButton
                  className="btn btn-secondary mb-3 me-2"
                  buttonText="Cancelar"
                  onClick={itemOnClose}
                />
               
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLanding;