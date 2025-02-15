import { Carousel } from "../components/Carousel";
import FeatureProduct from "../components/FeatureProduct";
import {slides} from "../data/carouselData.json";
import Gallery from "../components/AutoGallery"
export const Home = () => {
  return (
    <>
      <section>
        <div className="backhome">
          <Carousel data={slides} />
        </div>

        <FeatureProduct />
        <Gallery/>
      </section>
    </>
  );
};