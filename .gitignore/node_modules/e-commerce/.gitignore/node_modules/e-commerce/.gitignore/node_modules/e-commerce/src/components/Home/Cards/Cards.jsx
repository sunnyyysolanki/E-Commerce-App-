
import { Link } from "react-router";
import styles from "./Cards.module.scss";
import propTypes from "prop-types"

const Cards = ({data}) => {

  const imageUrl = data?.img?.url
  ? `http://localhost:1337${data.img.url}` // Prepend base URL for relative path
  : "https://via.placeholder.com/300"; // Fallback image if no URL provided


  return (
    <>
      <div className={styles["card"]} style={{ width: "20rem" }}>
        <Link to={`/Product/${data.id}`}>
      {data.isNew && <span className={styles["NewSeason"]}>New Season</span>}
        <img src={imageUrl} className={styles["card-img-top"]} alt="..." />
        <div className={styles["card-body"]}>
          <span className={styles["discount"]}>$ {data.price}</span ><span className={styles["price"]}>$ {data.price-50}</span>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;

Cards.propTypes={
  data:propTypes.object
}
