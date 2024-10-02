import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductById } from "../../redux/actions";
import GenericButton from "../../Auth/generalComponents/GenericButton/GenericButton";
import * as Comp from "../../components/IndexComponents";
import * as Ad from "./AdminIndex";

const ProductComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products);
  const response = useSelector((state) => state.ProductId);
  const info = response.info;
  const items = response.items;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    } else {
      dispatch(getProduct());
    }
  }, [id]);
  //console

  return (
    <div>
      <Ad.AdminNav />
      <div className="container marketing">
        {id ? (
          <Comp.Album
            info={info}
            items={items}
            param={"/admin/product"}
            subParam={"/admin/product/item"}
          />
        ) : (
          <>
            <div className="featurette-divider"></div>
            <Comp.Marketing products={products} param={"admin/product"} />
          </>
        )}
        <GenericButton
          className="btn btn-secondary mt-3 mb-3"
          onClick={() => {
            navigate("/admin");
          }}
          buttonText={"Volver"}
        />
      </div>
    </div>
  );
};

export default ProductComp;
