import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductById } from "../../redux/actions";
import {Marketing} from "../IndexComponents";
import {AlbumAdmin} from "./AdminIndex";

const ProductComp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Products);
  const response = useSelector((state) => state.ProductId);
  const info = response.info;
  const items = response.items;
  const { id } = useParams();
  const isAdmin = true;
  useEffect(() => {
    if (id) {
      dispatch(getProductById(id, isAdmin));
    } else {
      dispatch(getProduct(isAdmin));
    }
  }, [id]);
  //console

  return (
    <div>
      <div className="container marketing">
        {id ? (
          <AlbumAdmin info={info} items={items} />
        ) : (
          <>
            <div className="featurette-divider"></div>
            <Marketing products={products} param={"admin/product"} />
          </>
        )}
        <button 
          className="btn btn-sm btn-secondary mt-3 mb-3"
          onClick={() => {navigate(-1);}}
          >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ProductComp;
