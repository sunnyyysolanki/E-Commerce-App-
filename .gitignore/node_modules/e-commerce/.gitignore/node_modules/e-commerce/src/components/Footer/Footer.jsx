
import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={style["Footer"]}>
      <div className={style["top"]}>
        <div className={style["item"]}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className={style["item"]}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className={style["item"]}>
          <h1>About</h1>
          <span>
            Welcome to Assassin! We are committed to providing a seamless
            shopping experience with a wide range of high-quality products at
            affordable prices. From the latest trends to everyday essentials,
            we’ve got you covered. Shop with confidence and let us make your
            shopping journey enjoyable!
          </span>
        </div>
        <div className={style["item"]}>
          <h1>Contact</h1>
          <span>
            Have questions or need assistance? We’re here to help! Reach us at
            sunnysolanki@gmail.com or call us at +123456789. Follow us on social
            media for updates and exclusive offers. Your satisfaction is our
            priority!
          </span>
        </div>
      </div>
      <div className={style["bottom"]}>
      <div className={style["item"]}>
        <img src="/logo.png" />
        <span>&copy; 2015 RapidTables.com</span>
      </div>
      <div className={style["item"]}>
        <img className={style["payment_logo"]} src="/payment_logo.png"/>
      </div>
      </div>
    </div>
  );
};

export default Footer;
