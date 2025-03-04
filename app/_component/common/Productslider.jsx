'use client'
import SwiperSlider from './SwiperSlider';
import ProductItem from './ProductItem';
import { SwiperSlide } from 'swiper/react';

const Productslider = ({ items }) => {
  const productItems = [
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
    <ProductItem />,
  ];

  return (
    <div className="myproductSlider">
      <SwiperSlider
        slidesPerView={items} 
        spaceBetween={30}
        navigation={true}
        className="myproductSliderSwiper"
      >
        {productItems.map((item, index) => (
          <SwiperSlide key={index} className="productSwiperSlider">
            {item}
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default Productslider;
