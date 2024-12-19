
import Cards from "./Featured products/Cards"

const FeaturedProduct = () => {
  return (
    <div className="s">
    <div className="top">
      <div className="item">
      <h1>Featured Produts</h1>
      </div>    
      <div className="item">   
      <p>Elevate your style with our exclusive collection, crafted for elegance and comfort. Featuring premium fabrics and timeless designs, these pieces are perfect for any occasion. Embrace the art of effortless fashion and make every moment unforgettable. Discover your new wardrobe essentials today.</p>
      </div>
    </div>

    <div className="bottom">
     <Cards className="card"/>
     <Cards className="card"/>
     <Cards className="card"/>
     <Cards className="card"/>
      
    </div>
    </div>
  )
}

export default FeaturedProduct