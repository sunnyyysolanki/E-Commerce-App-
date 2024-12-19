import { MdDelete } from "react-icons/md";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, resetcart } from "../../reducer/Cart";
import { useEffect, useRef } from "react";
import propTypes from "prop-types";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const cartRef = useRef(); // Reference for the cart element

  const totalprice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total;
  };
  // Close cart on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false); // Close cart if the click is outside
      }
    };

    // Add click event listener
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsCartOpen]);

  return (
    <div className="cart" ref={cartRef}>
      <h1>Products in Your Cart</h1>
      {products?.map((item, index) => (
        <div key={index} className="item">
          <img src={item.imageurl} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">
              {item.quantity}*{item.price}
            </div>
          </div>
          <MdDelete
            className="delete"
            onClick={() =>
              dispatch(
                removefromcart({
                  id: item.id,
                })
              )
            }
          />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalprice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span
        className="reset"
        onClick={() => {
          dispatch(resetcart());
        }}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  isCartOpen: propTypes.bool,
  setIsCartOpen: propTypes.bool,
};
