import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../redux/actions";
import updateProduct from "./productEndpoint";
import "./productstyle.css";
import ImageUploader from "../../AdminComponents/ImageUploader";



const ProductEdition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const page = useSelector((state) => state.ProductId);
  useEffect(()=>{
      dispatch(getProductById(id))
  },[id])
  
  const onClose = ()=>{
    navigate(-1)
  }

  const [product, setProduct] = useState({
    title: "",
    landing: "",
    info_header: "",
    info_body: "",
    enable: false,
  });

  useEffect(() => {
    if (page.info) {
      setProduct({
        title: page.info.title || "",
        landing: page.info.landing || "",
        info_header: page.info.infoHeader || "",
        info_body: page.info.infoBody || "",
        enable: page.info.enable || false,
      });
    }
  }, [page.info]);
  
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
      landing: imageUrl,
    }));
  };

  const handleSubmit = async() => {
    // Lógica para actualizar el producto
    console.log("Producto actualizado:", product, id);
    await updateProduct( id, product, onClose)
  };
  return (
    <div className="imageBack">
      <div className="coverBack">
        <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
          <div className="container mt-5">
            <h1>Actualizacion de producto</h1>
            <section className="needs-validation" id="updateForm" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <ImageUploader
                    titleField={"Imagen portada:"}
                    imageValue={product.landing}
                    onImageUpload={handleImageChange}
                  />
                </div>
                <div className="col-md-6 mb-3"></div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Titulo:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    name="title"
                    value={product.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="info_header" className="form-label">
                    Info posicionamiento:
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="info_header"
                    name="info_header"
                    rows="3"
                    value={product.info_header}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="info_body" className="form-label">
                    Descripción:
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="info_body"
                    name="info_body"
                    rows="3"
                    value={product.info_body}
                    onChange={handleInputChange}
                  
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="enable" className="form-label">
                    Mostrar al publico
                  </label>
                  <select
                    className="form-select"
                    id="enable"
                    name="enable"
                    value={product.enable ? "true" : "false"}
                    onChange={handleInputChange}
                    
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
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

export default ProductEdition;
