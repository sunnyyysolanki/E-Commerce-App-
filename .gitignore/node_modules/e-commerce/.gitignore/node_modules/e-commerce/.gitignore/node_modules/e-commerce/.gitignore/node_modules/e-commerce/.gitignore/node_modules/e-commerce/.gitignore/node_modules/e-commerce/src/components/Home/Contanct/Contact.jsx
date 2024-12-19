import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <TiSocialTwitter />
          <TiSocialInstagram />
          <TiSocialFacebook />
        </div>
      </div>
    </div>
  );
};

export default Contact;
