import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../../redux/actions";
import {updateItem} from "../../../utils/productEndPoints";
import showConfirmationDialog from '../../../Auth/userComponents/sweetAlert'
import "./detailCardUpd.css";
import ImageUploader from "../../AdminComponents/ImageUploader";



const DetailCardUpd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = useSelector((state) => state.Item);
  useEffect(()=>{
      dispatch(getItem(id))
  },[id])
  
  const onClose = ()=>{
    navigate(-1)
  }

  const [product, setProduct] = useState({
    text: "",
    img: "",
  });

  useEffect(() => {
    if (item) {
      setProduct({
        text: item.text || "",
        img: item.img || "",
      });
    }
  }, [item]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (imageUrl) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      img: imageUrl,
    }));
  };

  const handleSubmit = async() => {
    // Lógica para actualizar el producto
    const confirmed = await showConfirmationDialog(
          "¿Está seguro de actualizar este item?"
        );
        if (confirmed) {
          // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
          await updateItem( id, product, onClose)
        }
    
  };
  return (
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
          <div className="container mt-5">
            <h1>Actualizacion de item</h1>
            <section className="needs-validation" id="updateItemForm" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <ImageUploader
                    titleField={"Imagen:"}
                    imageValue={item.img}
                    onImageUpload={handleImageChange}
                  />
                </div>
                <div className="col-md-6 mb-3"></div>
                <div className="mb-3">
                  <label htmlFor="text" className="form-label">
                    Texto:
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="text"
                    name="text"
                    rows="3"
                    value={item.text}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="d-flex flex-row me-3">
                  <button
                    className="btn btn-primary mb-3 me-2"
                    type="button"
                    id="submitButton"
                    onClick={handleSubmit}
                  >
                    Actualizar
                  </button>
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => {
                      onClose()
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardUpd;