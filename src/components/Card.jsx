import { Link, } from "react-router-dom";

const Card = ({ item, subParam }) => {
  

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={item.img} alt="Card image" />
        <div className="card-body">
          <p className="card-text">{item.text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link className="btn btn-sm btn-outline-secondary" to={`${subParam}/${item.id}`}>
                Ver mas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//`/detalle/item/${item.id}`