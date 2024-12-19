
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import style from "./Header.module.scss";

const Header = () => {
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
        <div className={style["logo"]}>ASSASIN</div>
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
          <span className={style["Cart"]}>
            <IoCartOutline />
            <span className={style["cart-value"]}>0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
