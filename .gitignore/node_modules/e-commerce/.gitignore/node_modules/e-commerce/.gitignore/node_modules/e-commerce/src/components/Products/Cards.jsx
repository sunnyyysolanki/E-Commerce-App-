
import styles from "./Cards.module.scss";
import propTypes from "prop-types"
import useFetch from "../../hooks/UseFetch";
import { Link } from "react-router";

const Cards = ({subcat,catId,range,sort}) => {

  const sortQuery = sort ? `&sort=price:${sort}` : "";

  const{data,fetching}=useFetch( `http://localhost:1337/api/products?populate=*&[filters][categories][id][$eq]=${catId}${subcat.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${range}${sortQuery}`)
 


  if(fetching)
    {
      return <div className="loading">Loading....</div>
    }

    return (
      <>
        {!fetching &&
          data.data.map((item) => {
            const imageUrl = item?.img?.url
              ? `http://localhost:1337${item.img.url}`
              : "https://via.placeholder.com/300";
    
            return (
              
              <div className={styles.card} style={{ width: "20rem" }} key={item.id}>
                <Link className={styles["link"]} to={`/Product/${item.id}`} key={item.id}>
                {item.isNew && <span className={styles.NewSeason}>New Season</span>}
                <img src={imageUrl} className={styles["card-img-top"]} alt="Product" />
                <div className={styles["card-body"]}>
                 <p className={styles["product_title"]}>{item.title}</p>
                  <span className={styles.discount}>$ {item.price+50}</span>
                  <span className={styles.price}>$ {item.price}</span>
                </div>
                </Link>
              </div>
            );
          })}
      </>
    );
    
};

export default Cards;

Cards.propTypes={
  data:propTypes.object,
  subcat:propTypes.array,
  catId:propTypes.number,
  range:propTypes.number,
  sort:propTypes.string,
}
