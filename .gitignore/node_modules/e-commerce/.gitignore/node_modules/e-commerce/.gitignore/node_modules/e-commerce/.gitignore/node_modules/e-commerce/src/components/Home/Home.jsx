import Slider from "./Slider/Slider";
import FeaturedProducts from "./Featured products/FeaturedProducts";
import Provider from "../../store/Context";
import Categories from "./Categories/Categories";
import Contact from "./Contanct/Contact";

const Home = () => {
  return (
    <>
      <Provider>
        <Slider />
        <FeaturedProducts type={"featured"} />
        <Categories />
        <FeaturedProducts  type={"trending"}/>
        <Contact />
      </Provider>
    </>
  );
};

export default Home;
