import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import "swiper/swiper.scss";
const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  lazy: true,
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 1000,
  spaceBetween: 0,
  effect: "slide",
  autoplay: true,
};
const Slider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.9;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <SwiperSlide>
        <div className="hero-slide" style={{ marginTop: "30px" }}>
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={slider1} alt="image1" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide" style={{ marginTop: "30px" }}>
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={slider2} alt="image2" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero-slide" style={{ marginTop: "30px" }}>
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={slider3} alt="image3" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
