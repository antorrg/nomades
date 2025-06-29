import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWorkById } from "../../../redux/actions";
import { updateWorks } from "../../../Endpoints/endpoints";
import { Form } from "react-bootstrap";
import showConfirmationDialog from "../../../Endpoints/sweetAlert";
import ImageUploader from "../../../utils/ImageUploader";
import Loading from "../../Loading";
import ImageSelector from "../../../utils/ImageSelector";

const OurWorkEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [imgUrl, setImgUrl] = useState(false);
  const item1 = useSelector((state) => state.WorkById);

  useEffect(() => {
    dispatch(getWorkById(id));
  }, [id]);

  const onClose = () => {
    navigate(-1);
    setLoad(false);
  };
  const onRetry = () => {
    setTimeout(() => {
      onClose();
    }, 3000);
  };
  const [item, setItem] = useState({
    title: "",
    text: "",
    image: "",
    enable: true,
    saver: false,
    useImg: false,
  });

  useEffect(() => {
    if (item1) {
      setItem({
        title: item1.title || "",
        text: item1.text || "",
        image: item1.image || "",
        enable: typeof item1.enable === "boolean" ? item1.enable : true,
        saver: typeof item1.saver === "boolean" ? item1.saver : false,
        useImg: typeof item1.useImg === "boolean"? item1.useImg : false,
      });
    }
  }, [item1]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleImageChange = (imageUrl) => {
    setItem((prevItem) => ({
      ...prevItem,
      image: imageUrl,
    }));
  };
  const handleSwitchChange = (e) => {
    const { checked, id } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [id]: checked,
    }));
  };
   const handleImgUrlSwitchChange = () => {
  setImgUrl((prev) => {
    const newValue = !prev;

    setItem((prevItem) => ({
      ...prevItem,
      useImg: newValue,
      image: newValue ? "" : "", // Resetear la imagen al cambiar de modo
    }));

    return newValue;
  });
};

  const handleSubmit = async () => {
    // Lógica para actualizar el producto
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de actualizar este item?"
    );
    if (confirmed) {
      await updateWorks(id, item, onClose, onRetry);
      setLoad(true);
    }
  };
  return (
    <div className="imageBack">
      {load ? (
        <Loading />
      ) : (
        <div className="coverBack">
          <div className="container-md modal-content colorBack formProductContainer rounded-4 shadow">
            <div className="container mt-5">
              <h1>Nuestro trabajo</h1>
              <section
                className="needs-validation"
                id="updateItemForm"
                noValidate
              >
                <div className="row">
                  {imgUrl ? (
                    <div className="col-md-6 mb-3">
                      <ImageSelector onImageSelect={handleImageChange} />
                    </div>
                  ) : (
                    <div className="col-md-6 mb-3">
                      <ImageUploader
                        titleField={"Imagen:"}
                        imageValue={item.image}
                        onImageUpload={handleImageChange}
                      />
                    </div>
                  )}
                  <div className="mb-3 form-check form-switch">
                    <Form.Check
                      type="switch"
                      id="imgUrlSwitch"
                      checked={imgUrl}
                      label="Active para elegir imagen guardada"
                      onChange={handleImgUrlSwitchChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3"></div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Titulo:
                    </label>
                    <textarea
                      className="form-control"
                      type="title"
                      id="title"
                      name="title"
                      value={item.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Texto:
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      id="text"
                      name="text"
                      value={item.text}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 form-check form-switch">
                    <Form.Check
                      type="switch"
                      id="saver"
                      checked={item.saver}
                      label={item.saver? "Desactive para eliminar imagen antigua": "Active para conservar imagen antigua"}
                      onChange={handleSwitchChange}
                    />
                  </div>
                  <div className="mb-3 form-check form-switch">
                    <Form.Check
                      type="switch"
                      id="enable"
                      checked={item.enable}
                      label={item.enable? "Desactive para no mostrar" : "Active para mostrar"}
                      onChange={handleSwitchChange}
                    />
                  </div>

                  <div className="d-flex flex-row me-3">
                    <button
                      className="btn btn-md btn-primary mb-3 me-2"
                      type="button"
                      id="submitButton"
                      onClick={handleSubmit}
                    >
                      Actualizar
                    </button>
                    <button
                      className="btn btn-md btn-secondary mb-3"
                      onClick={() => {
                        onClose();
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
      )}
    </div>
  );
};

export default OurWorkEdit;
