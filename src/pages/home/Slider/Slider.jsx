// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import Slider1 from "./SliderComponents/Slider1";


const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <div className="max-w-[1300px] mx-auto max-sm:px-8 ">
      <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Slider1 ></Slider1>
        </SwiperSlide>
        <SwiperSlide>
        <Slider1 ></Slider1>
        </SwiperSlide>
        <SwiperSlide>
        <Slider1 ></Slider1>
        </SwiperSlide>
        <SwiperSlide>
        <Slider1 ></Slider1>
        </SwiperSlide>
       
      </Swiper>
      
    </>
    </div> 
  )
}

export default Slider

 