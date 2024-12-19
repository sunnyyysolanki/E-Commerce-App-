import style from "./TrendingProduct.module.scss";
import Cards from "../Cards/Cards";

import useFetch from "../../../hooks/UseFetch";

const FeaturedProducts = () => {
  const { data, fetching } = useFetch(
    "http://localhost:1337/api/products?populate=*&[filters][type][$eq]=trending"
  );
  return (
    <div className={style["s"]}>
      <div className={style["top"]}>
        <h1>Trending Produts</h1>

        <p>
          Elevate your style with our exclusive collection, crafted for elegance
          and comfort. Featuring premium fabrics and timeless designs, these
          pieces are perfect for any occasion. Embrace the art of effortless
          fashion and make every moment unforgettable. Discover your new
          wardrobe essentials today.
        </p>
      </div>

      <div className={style["bottom"]}>
        {!fetching &&
          data.data.map((data, index) => <Cards data={data} key={index} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
