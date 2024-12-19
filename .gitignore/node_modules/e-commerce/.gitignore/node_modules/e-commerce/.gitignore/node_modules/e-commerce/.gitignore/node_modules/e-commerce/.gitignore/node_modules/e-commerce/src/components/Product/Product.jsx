import { useEffect, useState} from "react";
import "./Product.scss";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBalanceScaleRight } from "react-icons/fa";
import useFetch from "../../hooks/UseFetch";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addtocart } from "../../reducer/Cart";

const Product = () => {

  const dispatch = useDispatch();

  const catId = Number(useParams().id);
  const { data, fetching } = useFetch(
    `http://localhost:1337/api/products/?populate=*&[filters][id][$eq]=${catId}`
  );

  const [value, setValue] = useState("https://via.placeholder.com/300");
  const [quantities, setQuantities] = useState(1);

  useEffect(() => {
    if (data) {
      const imageUrl1 = data.data[0]?.img?.url
        ? `http://localhost:1337${data.data[0].img.url}`
        : "https://via.placeholder.com/300";
      setValue(imageUrl1); // Set the initial value to the main image URL
    }
  }, [data]);

  const imageUrl1 = data?.data[0]?.img?.url
    ? `http://localhost:1337${data.data[0].img.url}`
    : "https://via.placeholder.com/300";

  const imageUrl2 = data?.data[0]?.img2?.url
    ? `http://localhost:1337${data.data[0].img2.url}`
    : "https://via.placeholder.com/300";

  return ( <div className="product">
    {fetching?<div className="loading">Loading..</div>:(<>
     
      <div className="left">
        <div className="images">
          <img src={imageUrl1} onClick={() => setValue(imageUrl1)} alt="Thumbnail 1" />
          <img src={imageUrl2} onClick={() => setValue(imageUrl2)} alt="Thumbnail 2" />
        </div>
        <div className="mainimg">
          <img src={value} alt="Main Product" />
        </div>
      </div>
      <div className="right">
        <h1>Yellow Jeans Dress</h1>
        <span className="price">$19.9</span>
        <p>
          Elevate your style with our exclusive collection, crafted for elegance
          and comfort. Featuring premium fabrics and timeless designs, these
          pieces are perfect for any occasion. Embrace the art of effortless
          fashion and make every moment unforgettable. Discover your new wardrobe
          essentials today.
        </p>
        <div className="btn-container">
          <button onClick={() => quantities >= 2 && setQuantities(quantities - 1)}>
            -
          </button>
          {quantities}
          <button onClick={() => setQuantities(quantities + 1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addtocart({
          id:data.data[0].id,
          title:data.data[0].title,
          des:data.data[0].desc,
          price:data.data[0].price,
          imageurl:imageUrl1,
          quantity:quantities,
        }))}>
          <BsCart4 /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <IoMdHeartEmpty /> ADD TO WISHLIST
          </div>
          <div className="item">
            <FaBalanceScaleRight /> ADD TO COMPARE
          </div>
        </div>
      </div>
    </>)
    }
    </div>
  );
};

export default Product;
