'use client'
import { Rating } from '@mui/material';
import { usePathname } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomOutMap, MdOutlineAddShoppingCart } from "react-icons/md";

const ProductListView = () => {
    const path = usePathname();
    return (
        <div className="bg-white flex rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full mx-auto group">
            {/* Image Section */}
            <div className="image flex items-center justify-center w-[27%] relative">
                <img
                    className="w-full p-1 rounded-lg object-cover"
                    src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                    alt="Product"
                />
                <img
                    src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                    alt="product"
                    className='absolute top-0 w-full p-1 object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500'
                />
                {/* Discount Badge */}
                <div className="discount absolute top-2 left-2">
                    <p className="bg-[#ff5252] p-1 rounded-md text-white text-sm">10%</p>
                </div>

                {/* Hover Buttons (Wishlist, Add to Cart, Zoom) */}
                <div className="cardhover absolute top-[-15px] right-3 flex flex-col gap-2 -z-50
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
                    <button className={`button-wrapper bg-white p-2 rounded-full hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300 ${path !== '/' ? 'hidden' : ''}`}>
                        <MdOutlineZoomOutMap className="text-[16px]" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="content p-4 w-full flex flex-col justify-center mx-auto">
                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800">Product Title</h2>

                {/* Description */}
                <p className="text-gray-600 mt-2">
                    This is a sample product description. Add your desired content here to give more information about the product.
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
    );
};

export default ProductListView;
