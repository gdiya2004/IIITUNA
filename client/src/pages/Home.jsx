import { Carousel } from "../components/Carousel";
import FeatureProduct from "../components/FeatureProduct";
import {slides} from "../data/carouselData.json";
import Gallery from "../components/Gallery"
export const Home = () => {
  return (
    <>
      <section>
        <Carousel data={slides} />
        <FeatureProduct />
        <Gallery/>
      </section>
    </>
  );
};