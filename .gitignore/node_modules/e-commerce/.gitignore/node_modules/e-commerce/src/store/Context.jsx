import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types"
import axios from "axios"

export const Contextdata=createContext([]);

function Provider({children})
{

const [data,setdata]=useState([]);
const[fetching,setfetch]=useState(false);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products?limit=4')
  .then(res=> res.json())
  .then((data)=> {setdata(data);setfetch(true)});

},[])



  return<>
  {fetching &&
  <Contextdata.Provider value={{images:data}}>
  {children}
  </Contextdata.Provider>
}
  </>

}

export default Provider;

Provider.propTypes=
{
  children:propTypes.node,
}