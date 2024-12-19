import {  useState } from "react";
import "./Products.scss";
import { useParams } from "react-router";
import useFetch from "../../hooks/UseFetch";
import Cards from "./Cards";
const Products = () => {
  const [range, setRange] = useState(1000);
  const [sort, setsort] = useState(null);
  const catId = parseInt(useParams().id);

  
  const { data, fetching } = useFetch(
    `http://localhost:1337/api/sub-categories?populate=*&[filters][categories][id][$eq]=${catId}`
  );

  const [subcat,setsubcat]=useState([]);

  function handleChange(e)
  {
    const value=e.target.value;
    const isChecked=e.target.checked;
    setsubcat(isChecked?[...subcat,value]:subcat.filter((item)=>item!==value));
    
  }
 

  
  return (
    <div className="products">
      <div className="left">
        <div className="category">
          <h1>Product categories</h1>

          {!fetching && data.data.map((item,index) => (
            <div key={index} className="checkbox-item">
              <input type="checkbox" id={item.id} value={item.id} onChange={(e)=>handleChange(e)} />
              <label htmlFor="1">{item.title}</label>
            </div>
          ))}

     
          <div className="filter">
            <h1>Fiter By Price</h1>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setRange(Number(e.target.value))}
            ></input>
            <span>{range}</span>
          </div>

          <div className="sort">
            <h1>Sort By</h1>
            <div className="sorting-item">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={() => setsort("asc")}
              ></input>
              <label htmlFor="asc">Price (Lowest Price)</label>
            </div>
            <div className="sorting-item">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setsort("desc")}
              ></input>
              <label htmlFor="desc">Price (Highest Price)</label>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="Category-Image">
          <img
            className="Category-Image"
            src="../../../public/men-category.png"
          />
        </div>
        <div className="imagelist">
            <Cards subcat={subcat} catId={catId} range={range} sort={sort}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
