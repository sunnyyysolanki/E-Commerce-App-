
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import style from "./Header.module.scss";
import { useState } from "react";
import Cart from "../Cart/Cart"
import { useSelector } from "react-redux";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products=useSelector(state=>state.cart.products)

  // const[cart,setcart]=useState(false);

  return (
    <div className={style["Header"]}>
      <div className={style["left"]}>
        
          <div className={style["item"]}>
          <div className={style["icon"]}>
            <img src="/in.svg" style={{ width: "20px", height: "20px" }} />
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className={style["icon"]}>
            USD
              <MdKeyboardArrowDown />
          </div>
          <div className={style["item"]}>
            <Link className={style["link"]}>Men</Link>
          </div>
          <div className={style["item"]}>
            <Link className={style["link"]}>Women</Link>
          </div>
          <div className={style["item"]}>
            <Link className={style["link"]}>Children</Link>
          </div>
        </div>

      <div className={style["center"]}>
        <div className={style["logo"]}><Link  className={style["link"]} to="/">ASSASIN</Link></div>
      </div>
      <div className={style["right"]}>
        <div className={style["right-item"]}>
          <Link className={style["link"]}>Homepage</Link>
          <Link className={style["link"]}>About</Link>
          <Link className={style["link"]}>Contact</Link>
          <Link className={style["link"]}>Store</Link>
          <span>
            <GoSearch />
          </span>
          <span>
            <FaRegUser />
          </span>
          <span>
            <IoMdHeartEmpty />
          </span>
          <span onClick={() => setIsCartOpen(!isCartOpen)} className={style["Cart"]}>
            <IoCartOutline />
            <span className={style["cart-value"]}>{products.length}</span>
          </span>
        </div>
      </div>
      {isCartOpen && <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
      
    </div>
    
  );
};

export default Header;
