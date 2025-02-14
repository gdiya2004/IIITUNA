import React, { useState } from "react";
import { useFilterContext } from "../../Contexts/filterContext";
import "../Styles/servicecard.css"
const FilterSection = ({ onFilterChange }) => {
  // Local state for filter values
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");

  // Handle changes in the filter inputs
  const handleFilterChange = () => {
    onFilterChange({ location, budget, category });
  };
  const{updateFilterValue,filters:{text,service},all_data,filter_data,sorting}=useFilterContext()
  
  return (
   <>
    <div className="filter-sidebar">
      <div >
        <form action="#">
          <label htmlFor="sort"><h3>Budget:</h3></label>
          <select
          className="drop"
            name="sort"
            id="sort"
            onChange={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
      {/* <h2 className="text-2xl font-bold text-white mb-6">Filters</h2> */}

      
        
        <div className="filter-category" style={{"width":"25vw"}}>
                 
                  <form action='#'>
                    <h3>Service</h3>
                      <select 
                      value={service}
                      className="heelo"
                      name="service"
                      id="company"
                      onChange={updateFilterValue}
                      >
                        {
                         all_data.map((curElm,index)=>{
                          return(
                            <option name="service" key={index} value={curElm.service}>{curElm.service}</option>
                          )
                         }) 
                        }
                      </select>
                  </form>
                </div>
      </div>
    </>
  );
};

export default FilterSection;
