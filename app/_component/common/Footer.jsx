import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaCcVisa } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            {/* section one  */}
            <section className='footer-section-one bg-white border-t-2'>
                <div className="container mx-auto">
                    <div className="main-container grid grid-cols-4 py-7">
                        <div className="container-one border-r-[1px] border-gray-400 mr-14">
                            <h1 className='text-lg font-medium mb-4'>Contact us</h1>
                            <div className='text-gray-600 w-40 text-sm flex flex-col gap-3'>
                                <p>Classyshop - Mega Super Store 507-Union Trade Centre France</p>
                                <p>sales@yourcompany.com</p>
                                <p>(+91) 9876-543-210</p>
                                <div className="image-text">
                                    <p>Online Chat Get Expert Help</p>
                                </div>
                            </div>
                        </div>
                        <div className="container-two">
                            <h1 className='text-lg font-medium mb-4'>Product</h1>
                            <div className='text-gray-600 text-sm flex flex-col gap-3'>
                                <p>Prices drop</p>
                                <p>New products</p>
                                <p>Best sales</p>
                                <p>Contact us</p>
                                <p>Sitemap</p>
                                <p>Stores</p>
                            </div>
                        </div>
                        <div className="container-three">
                            <h1 className='text-lg font-medium mb-4'>Our company</h1>
                            <div className='text-gray-600 text-sm flex flex-col gap-3'>
                                <p>Delivery</p>
                                <p>Legal Notice</p>
                                <p>Terms and conditions of use</p>
                                <p>About us</p>
                                <p>Secure payment</p>
                                <p>Login</p>
                            </div>
                        </div>
                        <div className="contaienr-four">
                            <h1 className='text-lg font-medium mb-4'>Subscribe to newsletter</h1>
                            <div className='text-gray-600 text-sm flex flex-col gap-3'>
                                <p>Subscribe to our latest newsletter to get news about special discounts.</p>
                                <form className='flex flex-col justify-start items-start gap-2'>
                                    <input type="email" placeholder='Your Email Address' className='p-2 rounded-lg outline-none' />
                                    <button type='submit' className='uppercase bg-primary text-white px-2 py-1 rounded-lg'>Subscribe</button>
                                    <div className=''>
                                        <input type="checkbox" name="terms" id="terms" />
                                        <span className='ms-1'>I agree to the terms and conditions and the privacy policy
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='last-section bg-gray-300 p-2'>
                <div className="container flex items-center justify-between">
                    <div className="social-media flex gap-2">
                        <button className='p-1 border border-black rounded-full hover:border-primary hover:bg-primary group'>
                            <FaFacebookF className='group-hover:text-white ' />
                        </button>
                        <button className='p-1 border border-black rounded-full hover:border-primary hover:bg-primary group'>
                            <FaXTwitter className='group-hover:text-white' />
                        </button>
                        <button className='p-1 border border-black rounded-full hover:border-primary hover:bg-primary group'>
                            <FaLinkedinIn className='group-hover:text-white' />
                        </button>
                        <button className='p-1 border border-black rounded-full hover:border-primary hover:bg-primary group'>
                            <GrInstagram className='group-hover:text-white' />
                        </button>
                    </div>
                    <div className="rights">
                        <p className='text-sm text-gray-700 link'>© 2025 - Ecommerce software by PrestaShop™</p>
                    </div>
                    <div className="card-icons">
                        <FaCcVisa />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer
