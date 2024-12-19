import { useContext,useState } from "react";
import style from "./Slider.module.scss";
import { HiArrowSmallRight } from "react-icons/hi2";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { Contextdata } from "../../../store/Context";
const Slider = () => {
  const { images } = useContext(Contextdata);
  const [count, setcount] = useState(1);

  function left() {
    setcount(count === 0 ? 3 : count - 1);
  }
  function right() {
    setcount(count === 3 ? 0 : count + 1);
  }

  return (
    <div className={style["slider"]}>
      <div
        className={style["container"]}
        style={{ transform: `translateX(-${count * 100}vw)` }}
      >
        {images.map((i, index) => (
          <img key={index} src={i["image"]}></img>
        ))}
      </div>
      <div className={style["btn-container"]}>
        <div className={style["btn1"]}>
          <button onClick={() => left()}>
            <HiArrowSmallLeft />
          </button>
        </div>
        <div className={style["btn2"]}>
          <button onClick={() => right()}>
            <HiArrowSmallRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
