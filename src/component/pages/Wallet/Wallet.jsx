import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import image from "../../../assets/images/features/binanceImg.jpg";
import BitcoinCard from "./BitcoinCard";
import Header from "../../extra/Header";
import LanguagePopUp from "../../extra/LanguagePopUp";
import TycoonCard from "./TycoonCard";
import BitcoinDetails from "./BitcoinDetails";
import TycoonDetails from "./TycoonDetails";
import Navbar from "../../partial/navbar";

const Wallet = () => {
  const [topSwiper, setTopSwiper] = useState(null);
  const [bottomSwiper, setBottomSwiper] = useState(null);
  const [isLanguageVisible, setIsLanguageVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const toggleLangPopup = () => {
    setIsLanguageVisible(!isLanguageVisible);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageVisible(false);
  };

  useEffect(() => {
    if (topSwiper && bottomSwiper) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);

  return (
    <div className="wallet-bg">
      <Header
        selectedLanguage={selectedLanguage}
        toggleLangPopup={toggleLangPopup}
      />
      <div className="lg-max-w-md mx-auto">
        {/* Top Swiper */}
        <Swiper
          modules={[Controller]}
          onSwiper={setTopSwiper}
          slidesPerView={1}
          spaceBetween={20}
        >
          <SwiperSlide>
            <BitcoinCard />
          </SwiperSlide>
          <SwiperSlide>
            <TycoonCard />
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
            <BitcoinDetails />
          </SwiperSlide>
          <SwiperSlide>
            <TycoonDetails />
          </SwiperSlide>
        </Swiper>
      </div>

      <Navbar />

      <LanguagePopUp
        isLanguageVisible={isLanguageVisible}
        toggleLangPopup={toggleLangPopup}
        changeLanguage={changeLanguage}
      />
    </div>
  );
};

export default Wallet;
