'use client';

import SwiperSlider from '../common/SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const HomeCardSlider = ({ categories }) => {
    // console.log("client side categories",categories);
    
    return (
        <div className="homeCartSlider mb-4">
            <SwiperSlider slidesPerView={7} spaceBetween={10} autoplay={false} className="mySwiper">
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Link href="/">
                            <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                                <img src={category.categoryImages} alt={category.categoryName} className="w-[80px] h-[80px] object-contain" />
                                <h3 className="mt-2 text-sm font-medium">{category.categoryName}</h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </SwiperSlider>
        </div>
    );
};

export default HomeCardSlider;
