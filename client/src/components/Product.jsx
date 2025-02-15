import "../index.css";
import { NavLink } from "react-router-dom";
const Product = ({ id, name, price, image }) => {
  console.log("id in pro",id)
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
       
          <img src={image} alt={name} />
        
        <div className="card-data">
          <h3>{name}</h3>
          <div className="card-data-flex">
            <span className="card-data--price">${price}</span>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
