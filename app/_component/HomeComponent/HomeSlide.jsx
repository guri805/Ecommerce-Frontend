'use client'
import SwiperSlider from '../common/SwiperSlider';
import { SwiperSlide } from 'swiper/react';

const HomeSlide = () => {
  const images = [
    { source: "banner1.jpg", alt: "banner image 1" },
    { source: "banner12.jpg", alt: "banner image 2" },
    { source: "banner3.jpg", alt: "banner image 3" },
    { source: "banner4.jpg", alt: "banner image 4" },
    { source: "banner5.jpg", alt: "banner image 5" },
    { source: "banner6.jpg", alt: "banner image 6" },
  ];

  return (
    <div className="homeSlider py-8 pt-4">
      <div className="!w-[90%] !mx-auto">
        <SwiperSlider
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          autoplayDelay={2500}
          className="sliderHome"
        >
          {images.map((curEle, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="item rounded-[20px] overflow-hidden">
                <img src={curEle.source} alt={curEle.alt} className="w-full" />
              </div>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </div>
  );
};

export default HomeSlide;
