import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import tv from "../../Images/resized/1..jpeg";
import fridge from "../../Images/resized/2..png";
import laptop from "../../Images/resized/3..png";
import dslr from "../../Images/resized/4..png";
import iphone from "../../Images/resized/5..png";
import ps51 from "../../Images/resized/6..png";
import speaker from "../../Images/resized/7..png";
import keybord from "../../Images/resized/8..png";
import headphone from "../../Images/resized/9..png";
import ps52 from "../../Images/resized/10..png";

const Home = () => {
  return (
    <div>
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-[100%]" src={tv} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={fridge} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={laptop} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={dslr} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={iphone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={ps51} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={speaker} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={keybord} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={headphone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-[100%]" src={ps52} alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <p className="text-center my-6 text-4xl">Inventory</p>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
