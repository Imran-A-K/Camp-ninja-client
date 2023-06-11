
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay, Navigation, Thumbs } from "swiper";
import { useRef, useState } from "react";
import Slider1 from "./SliderComponents/Slider1";
import Slider2 from "./SliderComponents/Slider2";
import Slider3 from "./SliderComponents/Slider3";
import Slider4 from "./SliderComponents/Slider4";
import useAuthentication from "../../../hooks/useAuthentication";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  const { nav } = useAuthentication()

  const handleSwiperHold = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleSwiperRelease = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };
  return (
    <div className="max-w-[1300px] mx-auto max-[1298px]:px-8">
      {  
      !nav && <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      spaceBetween={10}
      navigation={false}
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Autoplay, Navigation, Thumbs, FreeMode]}
      className="mySwiper2"
      onMouseEnter={handleSwiperHold}
      onMouseLeave={handleSwiperRelease}
      onTouchStart={handleSwiperHold}
      onTouchEnd={handleSwiperRelease}
    >
      <SwiperSlide>
        <Slider1></Slider1>
      </SwiperSlide>
      <SwiperSlide>
        <Slider2></Slider2>
      </SwiperSlide>
      <SwiperSlide>
        <Slider3></Slider3>
      </SwiperSlide>
    </Swiper>
      }
    
    </div>
  );
};

export default Slider;
