import Productslider from "./_component/productComponents/Productslider";
import HomeCardSlider from "./_component/HomeComponent/HomeCardSlider";
import HomeSlide from "./_component/HomeComponent/HomeSlide";
import TabsComponent from "./_component/common/TabsComponent";
import AddBannerSlider from "./_component/HomeComponent/AddBannerSlider";
import ProductDetailDialog from "./_component/common/ProductDetailDialog"; // ✅ Import the dialog

// import icons 
import { FaShippingFast } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { ImGift } from "react-icons/im";
import { BiSupport } from "react-icons/bi";

export default function Home() {
  return (
    <>
      {/* Hero Section with Slider */}
      <HomeSlide />
      <div className="container mx-auto">
        {/* Home Card Slider */}
        <HomeCardSlider />
      </div>

      {/* Free Shipping Banner Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="freeshiping w-[80%] m-auto py-3 px-8 border-[3px] border-red-500 flex items-center justify-between rounded-md">
            <div className="col-one flex items-center gap-4">
              <FaShippingFast className="text-[40px]" />
              <span className="text-[20px] font-[600]">FREE SHIPPING</span>
            </div>
            <div className="h-8 bg-slate-400 w-[2px]"></div>
            <div className="col-two text-[15px]">
              <p>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <div className="h-8 bg-slate-400 w-[2px]"></div>
            <div className="col-three text-[20px] font-[600]">
              <p>-ONLY $200*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[22px] font-[500]">Popular Products</h3>
              <p>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[60%]">
              <TabsComponent />
            </div>
          </div>
          <div className="ProductSlider my-6">
            <Productslider items={5} />
          </div>
        </div>
      </section>

      <section className='banner'>
        <div className="container mx-auto">
          <AddBannerSlider />
        </div>
      </section>

      {/* Latest Product Section */}
      <section className='latestProduct bg-white py-7'>
        <div className="container mx-auto">
          <div className="leftSec pb-7">
            <h3 className="text-[22px] font-[500]">Latest Products</h3>
          </div>
          <div className="product mb-5">
            <Productslider items={5} />
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className='featuredProduct bg-white pb-7 pt-4'>
        <div className="container mx-auto">
          <div className="leftSec pb-7">
            <h3 className="text-[22px] font-[500]">Featured Products</h3>
          </div>
          <div className="product mb-5">
            <Productslider items={5} />
          </div>
        </div>
      </section>

      {/* Icons with Descriptions */}
      <section className='icons'>
        <div className="container mx-auto">
          <div className="boxes grid grid-cols-5 py-7 ">
            <div className="box1 flex flex-col items-center justify-center group">
              <LiaShippingFastSolid className='text-6xl group-hover:-translate-y-1 transition-transform duration-200' />
              <p className='font-medium mt-1'>Free Shipping</p>
              <p className='text-sm text-gray-700'>For all Orders Over $100</p>
            </div>
            <div className="box1 flex flex-col items-center justify-center group">
              <img src="product-return.png" alt="" width={50} className='group-hover:-translate-y-1 transition-transform duration-200' />
              <p className='font-medium mt-1'>30 Days Returns</p>
              <p className='text-sm text-gray-700'>For an Exchange Product</p>
            </div>
            <div className="box1 flex flex-col items-center justify-center group">
              <IoWalletOutline className='text-6xl group-hover:-translate-y-1 transition-transform duration-200' />
              <p className='font-medium mt-1'>Secured Payment</p>
              <p className='text-sm text-gray-700'>Payment Cards Accepted</p>
            </div>
            <div className="box1 flex flex-col items-center justify-center group">
              <ImGift className='text-6xl group-hover:-translate-y-1 transition-transform duration-200' />
              <p className='font-medium mt-1'>Special Gifts</p>
              <p className='text-sm text-gray-700'>Our First Product Order</p>
            </div>
            <div className="box1 flex flex-col items-center justify-center group">
              <BiSupport className='text-6xl group-hover:-translate-y-1 transition-transform duration-200' />
              <p className='font-medium mt-1'>Support 24/7</p>
              <p className='text-sm text-gray-700'>Contact us Anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Add Product Detail Dialog at the bottom to ensure it's always available */}
      <ProductDetailDialog />
    </>
  );
}
