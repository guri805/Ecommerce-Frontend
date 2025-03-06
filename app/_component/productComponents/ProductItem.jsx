'use client'
import { Rating } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap, MdOutlineAddShoppingCart } from "react-icons/md";

const ProductItem = () => {

    return (
        <>
            <div className="cardcontainer">
                {/* Card Wrapper */}
                <div className="card shadow-xl border relative border-gray-200 rounded-lg group">

                    {/* Image Section */}
                    <div className="image relative pt-[85%]">
                        <img
                            src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                            alt="Product"
                            className="absolute h-[100%] top-0 w-[100%] object-cover object-top rounded-t-lg"
                        />
                        <img
                            src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                            alt="product"
                            className='absolute top-0 h-[100%] w-[100%] object-cover object-top rounded-t-lg opacity-0 group-hover:opacity-100 transition-all duration-500'
                        />
                    </div>

                    {/* Discount Badge */}
                    <div className="discount absolute top-2 left-2">
                        <p className="bg-[#ff5252] p-1 rounded-md text-white text-sm">10%</p>
                    </div>

                    {/* Hover Buttons (Wishlist, Add to Cart, Zoom) */}
                    <div className="cardhover absolute top-[0px] right-3 flex flex-col gap-2 -z-50
                    group-hover:z-50 items-center justify-center group-hover:top-3 transition-all duration-800">
                        {/* Wishlist Button */}
                        <button className="button-wrapper bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300">
                            <FaRegHeart className="text-[16px]" />
                        </button>
                        {/* Add to Cart Button */}
                        <button className="button-wrapper bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300">
                            <MdOutlineAddShoppingCart className="text-[16px]" />
                        </button>
                        {/* Zoom Button */}
                        <button className="button-wrapper bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300" onClick={() => context.setOpenProductDetailModel(true)}>
                            <MdOutlineZoomOutMap className="text-[16px]" />
                        </button>
                    </div>

                    {/* Content Section */}
                    <div className="content px-1">
                        {/* Product Title */}
                        <h4 className="text-md font-medium mt-1 uppercase">Title</h4>

                        {/* Product Description */}
                        <p className="text-sm my-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        {/* Rating and Price Section */}
                        <div className="last-content">
                            {/* Rating */}
                            <div className="rating">
                                <Rating
                                    name="read-only"
                                    value={3}
                                    readOnly
                                    sx={{ fontSize: '16px' }} // Adjusted rating size
                                />
                            </div>

                            {/* Price */}
                            <div className="price">
                                <p className="text-sm pb-3">
                                    <span className="line-through font-medium">$45.00</span>
                                    <span className="ms-3 text-primary font-medium">$30.00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
