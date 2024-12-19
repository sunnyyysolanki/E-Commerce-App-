import { useEffect, useState } from 'react'
import style from "./Slider.module.scss"
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
const Slider = () => {

  const [data,setdata]=useState([]);

useEffect(()=>{fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(data=>{setdata(data)});},[])
           
            let image=[];

            if (data.length > 0) 
              {
              data.map((data,index)=>{
                  image[index]=data['image'];
              });
            }

      const [count,setcount]=useState(1);
      function left()
      {   

          setcount(count===0?4:count-1)
      }
      function right()
      {
        
        setcount(count===4?0:count+1)
      }



  return (
    <div className={style["slider"]}>
    <div className={style['container']} style={{transform:`translateX(-${count*100}vw)`}}>
     <img src={image[0]}></img>
     <img src={image[1]}></img>
     <img src={image[2]}></img>
     <img src={image[3]}></img>
     <img src={image[4]}></img>
    </div>
    <div className={style['btn-container']}>
    <div className={style['btn1']}>
      <button onClick={()=>left()}><HiArrowSmallLeft/></button>
      </div>
      <div className={style['btn2']}>
      <button onClick={()=>right()}><HiArrowSmallRight/></button>
    </div>
    </div>
    </div>
     
  )
}

export default Slider