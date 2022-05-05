import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import EascTestimony from "./EachTestimony";

const Testimonials = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("FakeDB/FakeComments.json")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 my-[80px] mx-auto">
          <h1 class="text-4xl title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {comments.map((item) => (
                <SwiperSlide>
                  <EascTestimony key={item.id} item={item}></EascTestimony>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
