import "../Styles/servicecard.css";
import React from "react";
import { useFilterContext } from "../../Contexts/filterContext";
import { useNavigate } from "react-router-dom"; 

const ServiceList = () => {
  const { filter_data } = useFilterContext(); 
  const navigate = useNavigate(); 

  const handleServiceClick = (product) => {
      navigate(`/singleProduct/:${product.id}`)
  };

  return (
    <div className="service-main">
      <h2>Filtered Services</h2>

      {/* Grid for Service Cards */}
      <div className="service-grid">
        {filter_data.length > 0 ? (
          filter_data.map((product, index) => (
            <div key={index} className="service-card" onClick={() => handleServiceClick(product)}>
              <img src={product.image} alt={product.service} />
              <h3>{product.service}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
