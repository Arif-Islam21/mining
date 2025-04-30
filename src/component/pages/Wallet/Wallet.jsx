import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import image from "../../../assets/images/features/binanceImg.jpg";

const Wallet = () => {
  const [topSwiper, setTopSwiper] = useState(null);
  const [bottomSwiper, setBottomSwiper] = useState(null);

  useEffect(() => {
    if (topSwiper && bottomSwiper) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);

  return (
    <div>
      {/* Top Swiper */}
      <Swiper
        modules={[Controller]}
        onSwiper={setTopSwiper}
        slidesPerView={1}
        spaceBetween={20}
      >
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
      </Swiper>

      {/* Bottom Swiper (Related Content) */}
      <Swiper
        modules={[Controller]}
        onSwiper={setBottomSwiper}
        slidesPerView={1}
        spaceBetween={10}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <div>Details for Image 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Details for Image 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Details for Image 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Wallet;
