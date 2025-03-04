import Productslider from "./_component/common/Productslider";
import HomeCardSlider from "./_component/HomeComponent/HomeCardSlider";
import HomeSlide from "./_component/HomeComponent/HomeSlide";
import TabsComponent from "./_component/common/TabsComponent";
import AddBannerSlider from "./_component/HomeComponent/AddBannerSlider";

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
            {/* Free Shipping Information */}
            <div className="col-one flex items-center gap-4">
              <FaShippingFast className="text-[40px]" />
              <span className="text-[20px] font-[600]">FREE SHIPPING</span>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 bg-slate-400 w-[2px]"></div>

            {/* Additional Free Shipping Details */}
            <div className="col-two text-[15px]">
              <p>Free Delivery Now On Your First Order and over $200</p>
            </div>

            {/* Vertical Divider */}
            <div className="h-8 bg-slate-400 w-[2px]"></div>

            {/* Minimum Order Details */}
            <div className="col-three text-[20px] font-[600]">
              <p>-ONLY $200*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            {/* Left Section: Title and Description */}
            <div className="leftSec">
              <h3 className="text-[22px] font-[500]">Popular Products</h3>
              <p>Do not miss the current offers until the end of March.</p>
            </div>

            {/* Right Section: Tabs for Categories */}
            <div className="rightSec w-[60%]">
              <TabsComponent />
            </div>
          </div>

          {/* Product Slider Section */}
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

      {/* latest product section */}
      <section className='latestProduct bg-white py-7'>
        <div className="container mx-auto">
          <div className="leftSec pb-7">
            <h3 className="text-[22px] font-[500]">Latest Products</h3>
          </div>
          <div className="product mb-5">
            <Productslider items={5} />
          </div>
          {/* Advertisement Banner Slider */}
        </div>
      </section>

      {/* shop for you section */}
      <section className='shopForYou pb-7'>
        <div className="container mx-auto">
          <div className="maincontainer flex">
            <div className="leftcontainer bg-white flex flex-col p-4 border mt-7 basis-1/3">
              <div className="heading flex justify-between items-center mb-7">
                <h1 className='text-[22px] font-[500]'>Men's Fashion</h1>
                <button className='bg-blue-400 text-white p-2 rounded-full'>
                  <FaGreaterThan />
                </button>
              </div>
              <div className="boxes grid grid-cols-2 gap-x-3 gap-y-5">
                <div className="box">
                  <div className="subbox border-[1px] border-gray-300 p-3 rounded-lg bg-gray-100">
                    <img src="https://api.spicezgold.com/download/file_1734529474612_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp" alt="" className='h-[150px] w-[100%] object-cover object-top rounded-md' />
                    <p className=' mt-[2px]'>Men's T-shirt</p>
                    <p className='text-green-700 font-medium text-lg mt-[-4px]'>Min.70% off</p>
                  </div>
                </div>
                <div className="box">
                  <div className="subbox border-[1px] border-gray-300 p-3 rounded-lg bg-gray-100">
                    <img src="https://api.spicezgold.com/download/file_1734529474612_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp" alt="" className='h-[150px] w-[100%] object-cover object-top rounded-md' />
                    <p className=' mt-[2px] '>Men's T-shirt</p>
                    <p className='text-green-700 font-medium text-lg mt-[-4px]'>Min.70% off</p>
                  </div>
                </div>
                <div className="box">
                  <div className="subbox border-[1px] border-gray-300 p-3 rounded-lg bg-gray-100">
                    <img src="https://api.spicezgold.com/download/file_1734529474612_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp" alt="" className='h-[150px] w-[100%] object-cover object-top rounded-md' />
                    <p className=' mt-[2px]'>Men's T-shirt</p>
                    <p className='text-green-700 font-medium text-lg mt-[-4px]'>Min.70% off</p>
                  </div>
                </div>
                <div className="box">
                  <div className="subbox border-[1px] border-gray-300 p-3 rounded-lg bg-gray-100">
                    <img src="https://api.spicezgold.com/download/file_1734529474612_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp" alt="" className='h-[150px] w-[100%] object-cover object-top rounded-md' />
                    <p className=' mt-[2px]'>Men's T-shirt</p>
                    <p className='text-green-700 font-medium text-lg mt-[-4px]'>Min.70% off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightcontainer ms-5 p-7 flex items-center justify-center basis-2/3 pr-0 mb-[-20px]">
              <img
                src="https://images01.nicepagecdn.com/page/10/92/website-template-preview-109210.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured product section */}
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

      {/* icons with description */}
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
    </>
  );
}
