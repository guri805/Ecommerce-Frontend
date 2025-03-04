'use client'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Autoplay } from 'swiper/modules';

const SwiperSlider = ({
  slidesPerView = 1,
  spaceBetween = 10,
  swiperModules = [Navigation], 
  autoplay = false, 
  autoplayDelay = null,
  className = '',
  children,
}) => {

  const modules = [...swiperModules];
  if (autoplay) {
    modules.push(Autoplay); 
  }

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      autoplay={
        autoplay
          ? {
              delay: autoplayDelay || 3000, 
              disableOnInteraction: true,
            }
          : false
      }
      modules={modules}
      className={className}
      navigation={true} 
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlider;
