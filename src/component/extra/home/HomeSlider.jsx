// BootstrapCarousel.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// image import
import slide1 from "../../../assets/images/slider/homeSlider1.png";
import slide2 from "../../../assets/images/slider/homeSlider2.png";
import slide3 from "../../../assets/images/slider/homeSlider3.png";
import slide4 from "../../../assets/images/slider/homeSlider4.png";
import slide5 from "../../../assets/images/slider/homeSlider5.png";
import slide6 from "../../../assets/images/slider/homeSlider6.png";
import slide7 from "../../../assets/images/slider/homeSlider7.png";
import slide8 from "../../../assets/images/slider/homeSlider8.png";
import slide9 from "../../../assets/images/slider/homeSlider9.png";
import slide10 from "../../../assets/images/slider/homeSlider10.png";

const HomeSlider = () => {
  return (
    <Carousel className="home_slider" style={{ marginTop: "16px" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide4} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide5} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide6} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide7} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide8} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide9} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide10} />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
