import { useContext } from "react";
import "./Categories.scss";
import { Contextdata } from "../../../store/Context";
import { Link } from "react-router";
const Categories = () => {
  const { images } = useContext(Contextdata);

  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={images[0]?.image} />
            <Link className="Link" to="/Products/6">
          <button>
              MEN
          </button>
            </Link>
        </div>
        <div className="row">
          <img src={images[1]?.image} />
            <Link className="Link" to="/Products/8">
          <button>
              WOMEN
          </button>
            </Link>
        </div>
      </div>

      <div className="col">
        <div className="row">
          <img src={images[2]?.image} />
            <Link className="Link" to="/Products/3">
          <button>
              KIDS
          </button>
            </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={images[3]?.image} />
                <Link className="Link" to="/Products/4">
              <button>
                  SHOES
              </button>
                </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={images[1]?.image} />
             
                <Link className="Link" to="/Products/5">
                <button>
                  BRACELETE
              </button>
                </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={images[0]?.image} />
         
            <Link className="Link" to="/Products/6">
            <button>
              JACKETS
              </button>
            </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Categories;
